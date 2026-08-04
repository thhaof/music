// --- PLAYLIST CONFIGURATION ---
// Update this array with your own song details and relative paths
const songs = [
  { title: "Elegie", artist: "RPT MCK", src: "01. Elegie.mp3" },
  { title: "IDK", artist: "RPT MCK", src: "02. IDK.mp3" },
  { title: "Wtf Bby I'm Lit", artist: "RPT MCK", src: "03. Wtf Bby I_m Lit.mp3" }
];

// --- DOM ELEMENTS ---
const audio = document.getElementById('audio-element');
const loginOverlay = document.getElementById('login-overlay');
const appContainer = document.getElementById('app-container');
const passwordInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login-btn');

const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');

const titleEl = document.getElementById('now-playing-title');
const artistEl = document.getElementById('now-playing-artist');
const progressBar = document.getElementById('progress-bar');
const volumeBar = document.getElementById('volume-bar');
const currentTimeEl = document.getElementById('current-time');
const durationTimeEl = document.getElementById('duration-time');
const playlistEl = document.getElementById('playlist');

// --- STATE VARIABLES ---
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// --- AUTHENTICATION ---
loginBtn.addEventListener('click', validatePassword);
passwordInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') validatePassword();
});

function validatePassword() {
  const correctPass = "123456"; // Change to your preferred password
  if (passwordInput.value === correctPass) {
    loginOverlay.classList.add('hidden');
    appContainer.classList.remove('hidden');
    initPlayer();
  } else {
    alert("Incorrect password! Access denied.");
    passwordInput.value = "";
  }
}

// --- PLAYER INITIALIZATION ---
function initPlayer() {
  renderPlaylist();
  loadTrack(currentTrackIndex);

  // Event Listeners
  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', prevTrack);
  nextBtn.addEventListener('click', nextTrack);
  shuffleBtn.addEventListener('click', toggleShuffle);
  repeatBtn.addEventListener('click', toggleRepeat);

  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('ended', handleTrackEnded);
  progressBar.addEventListener('input', seekAudio);
  volumeBar.addEventListener('input', (e) => audio.volume = e.target.value);

  // Keyboard Controls (Spacebar toggle)
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !loginOverlay.classList.contains('hidden')) return;
    if (e.code === 'Space') {
      e.preventDefault(); // Prevents page scroll
      togglePlay();
    }
  });
}

// --- PLAYBACK CONTROL FUNCTIONS ---
function loadTrack(index) {
  currentTrackIndex = index;
  const track = songs[currentTrackIndex];
  audio.src = track.src;
  titleEl.innerText = track.title;
  artistEl.innerText = track.artist;
  updateActivePlaylistItem();
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playBtn.innerHTML = '';
    isPlaying = false;
  } else {
    audio.play();
    playBtn.innerHTML = '';
    isPlaying = true;
  }
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + songs.length) % songs.length;
  loadTrack(currentTrackIndex);
  if (isPlaying) audio.play();
}

function nextTrack() {
  if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % songs.length;
  }
  loadTrack(currentTrackIndex);
  if (isPlaying) audio.play();
}

function handleTrackEnded() {
  if (isRepeat) {
    audio.currentTime = 0;
    audio.play();
  } else {
    nextTrack();
  }
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('active', isShuffle);
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  repeatBtn.classList.toggle('active', isRepeat);
}

// --- TIMING & UI UPDATES ---
function updateProgress() {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = percent;
    currentTimeEl.innerText = formatTime(audio.currentTime);
    durationTimeEl.innerText = formatTime(audio.duration);
  }
}

function seekAudio() {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- PLAYLIST MANAGEMENT ---
function renderPlaylist() {
  playlistEl.innerHTML = "";
  songs.forEach((song, i) => {
    const li = document.createElement('li');
    li.innerHTML = `${song.title}${song.artist}`;
    li.addEventListener('click', () => {
      loadTrack(i);
      if (!isPlaying) togglePlay();
      else audio.play();
    });
    playlistEl.appendChild(li);
  });
}

function updateActivePlaylistItem() {
  const items = playlistEl.querySelectorAll('li');
  items.forEach((item, idx) => {
    item.classList.toggle('active-track', idx === currentTrackIndex);
  });
}
