// Valid User Credentials
const VALID_CREDENTIALS = {
  username: "admin",
  password: "123456"
};

let tracks = [];
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// DOM Elements
const loginScreen = document.getElementById("login-screen");
const appScreen = document.getElementById("app-screen");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");
const logoutBtn = document.getElementById("logout-btn");

const audio = document.getElementById("audio-player");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("play-btn");
const playIcon = document.getElementById("play-icon");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const repeatBtn = document.getElementById("repeat-btn");

const progressBar = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volume-slider");
const playlistEl = document.getElementById("playlist");
const fileUpload = document.getElementById("file-upload");

// --- Auth Handling ---
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  if (enteredUsername === VALID_CREDENTIALS.username && enteredPassword === VALID_CREDENTIALS.password) {
    errorMsg.style.display = "none";
    loginScreen.classList.add("hidden");
    appScreen.classList.remove("hidden");
    
    usernameInput.value = "";
    passwordInput.value = "";
  } else {
    errorMsg.textContent = "Invalid username or password!";
    errorMsg.style.display = "block";
    passwordInput.value = "";
  }
});

logoutBtn.addEventListener("click", () => {
  pauseTrack();
  appScreen.classList.add("hidden");
  loginScreen.classList.remove("hidden");
});

// --- Upload Local Files ---
fileUpload.addEventListener("change", (e) => {
  const files = Array.from(e.target.files);
  if (files.length === 0) return;

  const startIndex = tracks.length;

  files.forEach((file) => {
    const songTitle = file.name.replace(/\.[^/.]+$/, "");
    const trackBlobUrl = URL.createObjectURL(file);

    tracks.push({
      title: songTitle,
      artist: "Local Track",
      src: trackBlobUrl
    });
  });

  renderPlaylist();

  if (tracks.length > 0 && !isPlaying && title.textContent === "No Song Loaded") {
    loadTrack(startIndex);
    playTrack();
  }
});

// --- Player Functions ---
function loadTrack(index) {
  if (tracks.length === 0) return;

  currentTrackIndex = index;
  const track = tracks[currentTrackIndex];
  title.textContent = track.title;
  artist.textContent = track.artist;
  audio.src = track.src;

  updatePlaylistHighlight();
}

function playTrack() {
  if (tracks.length === 0) return;
  isPlaying = true;
  audio.play();
  playIcon.className = "fa-solid fa-pause";
}

function pauseTrack() {
  isPlaying = false;
  audio.pause();
  playIcon.className = "fa-solid fa-play";
}

function togglePlay() {
  if (tracks.length === 0) return;
  isPlaying ? pauseTrack() : playTrack();
}

function prevTrack() {
  if (tracks.length === 0) return;
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrackIndex);
  playTrack();
}

function nextTrack() {
  if (tracks.length === 0) return;
  if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * tracks.length);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  }
  loadTrack(currentTrackIndex);
  playTrack();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  if (isNaN(duration)) return;

  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;

  const currentMin = Math.floor(currentTime / 60);
  const currentSec = Math.floor(currentTime % 60);
  currentTimeEl.textContent = `${currentMin}:${currentSec < 10 ? '0' : ''}${currentSec}`;

  const durationMin = Math.floor(duration / 60);
  const durationSec = Math.floor(duration % 60);
  durationEl.textContent = `${durationMin}:${durationSec < 10 ? '0' : ''}${durationSec}`;
}

function setProgress(e) {
  if (tracks.length === 0) return;
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

function renderPlaylist() {
  playlistEl.innerHTML = "";
  tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.className = "playlist-item";
    li.innerHTML = `<span>${index + 1}. ${track.title}</span>`;
    li.addEventListener("click", () => {
      loadTrack(index);
      playTrack();
    });
    playlistEl.appendChild(li);
  });
}

function updatePlaylistHighlight() {
  const items = playlistEl.querySelectorAll(".playlist-item");
  items.forEach((item, index) => {
    if (index === currentTrackIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// --- Listeners ---
playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", prevTrack);
nextBtn.addEventListener("click", nextTrack);

shuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
});

repeatBtn.addEventListener("click", () => {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle("active", isRepeat);
});

audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", () => {
  if (isRepeat) {
    playTrack();
  } else {
    nextTrack();
  }
});

progressContainer.addEventListener("click", setProgress);

volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

// Spacebar Control Shortcut
document.addEventListener("keydown", (e) => {
  if (!appScreen.classList.contains("hidden")) {
    if (e.code === "Space") {
      e.preventDefault();
      togglePlay();
    }
  }
});