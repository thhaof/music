document.addEventListener("DOMContentLoaded", () => {
  // Repository-hosted tracks inside the music/ folder
  const tracks = [
    {
      title: "Elegie",
      artist: "RPT MCK",
      src: "./music/01. Elegie.mp3"
    },
    {
      title: "IDK",
      artist: "RPT MCK",
      src: "./music/02. IDK.mp3"
    },
    {
      title: "Wtf Bby I'm Lit",
      artist: "RPT MCK",
      src: "./music/03. Wtf Bby I_m Lit.mp3"
    },
    {
      title: "Anh Không Muốn Nó Dễ Dàng",
      artist: "RPT MCK",
      src: "./music/04. Anh Không Muốn Nó Dễ Dàng.mp3"
    },
    {
      title: "Baby (feat. marzuz)",
      artist: "RPT MCK",
      src: "./music/05. Baby (feat. marzuz).mp3"
    },
    {
      title: "Yêu Anh Giết Anh",
      artist: "RPT MCK",
      src: "./music/06. Yêu Anh Giết Anh.mp3"
    },
    {
      title: "Mắt Môi Tay Chân (feat. Tage)",
      artist: "RPT MCK",
      src: "./music/07. Mắt Môi Tay Chân (feat. Tage).mp3"
    },
    {
      title: "Đao Của Anh Vừa",
      artist: "RPT MCK",
      src: "./music/08. Đao Của Anh Vừa.mp3.mp3"
    },
    {
      title: "Là Gì Của Nhau",
      artist: "RPT MCK",
      src: "./music/09. Là Gì Của Nhau.mp3.mp3"
    },
    {
      title: "Night In Prague",
      artist: "RPT MCK",
      src: "./music/10. Night In Prague.mp3"
    }
  ];

  let currentTrackIndex = 0;
  let isPlaying = false;
  let isShuffle = false;
  let isRepeat = false;

  // DOM Elements
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

  // Audio Player Functions
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
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlaying = true;
          playIcon.className = "fa-solid fa-pause";
        })
        .catch((err) => {
          console.warn("Autoplay blocked or playback error:", err);
          isPlaying = false;
          playIcon.className = "fa-solid fa-play";
        });
    }
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
    if (isNaN(duration) || duration === 0) return;

    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    const currentMin = Math.floor(currentTime / 60);
    const currentSec = Math.floor(currentTime % 60);
    currentTimeEl.textContent = `${currentMin}:${currentSec < 10 ? "0" : ""}${currentSec}`;

    const durationMin = Math.floor(duration / 60);
    const durationSec = Math.floor(duration % 60);
    durationEl.textContent = `${durationMin}:${durationSec < 10 ? "0" : ""}${durationSec}`;
  }

  function setProgress(e) {
    if (tracks.length === 0) return;
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    if (!isNaN(duration)) {
      audio.currentTime = (clickX / width) * duration;
    }
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

  // Event Listeners
  if (playBtn) playBtn.addEventListener("click", togglePlay);
  if (prevBtn) prevBtn.addEventListener("click", prevTrack);
  if (nextBtn) nextBtn.addEventListener("click", nextTrack);

  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      isShuffle = !isShuffle;
      shuffleBtn.classList.toggle("active", isShuffle);
    });
  }

  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      isRepeat = !isRepeat;
      repeatBtn.classList.toggle("active", isRepeat);
    });
  }

  if (audio) {
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", () => {
      if (isRepeat) {
        playTrack();
      } else {
        nextTrack();
      }
    });
  }

  if (progressContainer) progressContainer.addEventListener("click", setProgress);

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      audio.volume = e.target.value;
    });
  }

  // Spacebar Play/Pause Shortcut
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      togglePlay();
    }
  });

  // Initialize player immediately on page load
  renderPlaylist();
  if (tracks.length > 0) {
    loadTrack(0);
  }
});