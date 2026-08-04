document.addEventListener("DOMContentLoaded", () => {
  const tracks = [
    { title: "Elegie", artist: "RPT MCK", src: "./music/01. Elegie.mp3" },
    { title: "IDK", artist: "RPT MCK", src: "./music/02. IDK.mp3" },
    { title: "Wtf Bby I'm Lit", artist: "RPT MCK", src: "./music/03. Wtf Bby I_m Lit.mp3" },
    { title: "Anh Không Muốn Nó Dễ Dàng", artist: "RPT MCK", src: "./music/04. Anh Không Muốn Nó Dễ Dàng.mp3" },
    { title: "Baby (feat. marzuz)", artist: "RPT MCK", src: "./music/05. Baby (feat. marzuz).mp3" },
    { title: "Yêu Anh Giết Anh", artist: "RPT MCK", src: "./music/06. Yêu Anh Giết Anh.mp3" },
    { title: "Mắt Môi Tay Chân (feat. Tage)", artist: "RPT MCK", src: "./music/07. Mắt Môi Tay Chân (feat. Tage).mp3" },
    { title: "Đao Của Anh Vừa", artist: "RPT MCK", src: "./music/08. Đao Của Anh Vừa.mp3" },
    { title: "Là Gì Của Nhau", artist: "RPT MCK", src: "./music/09. Là Gì Của Nhau.mp3" },
    { title: "Night In Prague", artist: "RPT MCK", src: "./music/10. Night In Prague.mp3" },
    { title: "Một Cái Ôm", artist: "RPT MCK", src: "./music/11. Một Cái Ôm.mp3" },
    { title: "Liệm", artist: "RPT MCK", src: "./music/12. Liệm.mp3" },
    { title: "Nếu Như Ta Chẳng Còn (feat. AAP Ướt Mi)", artist: "RPT MCK", src: "./music/13. Nếu Như Ta Chẳng Còn (feat. AAP Ướt Mi).mp3" },
    { title: "Ai Mới Là Kẻ Xấu Xa", artist: "RPT MCK", src: "./music/14. Ai Mới Là Kẻ Xấu Xa.mp3" },
    { title: "Slippery (feat. Tùng Dương)", artist: "RPT MCK", src: "./music/15. Slippery (feat. Tùng Dương).mp3" },
    { title: "Intenpol", artist: "RPT MCK", src: "./music/16. Intenpol.mp3" },
    { title: "Tây Thi", artist: "RPT MCK", src: "./music/17. Tây Thi.mp3" },
    { title: "Hút và Hút", artist: "RPT MCK", src: "./music/18. Hút và Hút.mp3" },
    { title: "Dưa Chua", artist: "RPT MCK", src: "./music/19. Dưa Chua.mp3" },
    { title: "Xa Xôi (feat. Obito)", artist: "RPT MCK", src: "./music/20. Xa Xôi (feat. Obito).mp3" },
    { title: "Che Phủ", artist: "RPT MCK", src: "./music/21. Che Phủ.mp3" },
    { title: "Oanh M = Thuoc", artist: "RPT MCK", src: "./music/22. Oanh M = Thuoc.mp3" },
    { title: "Ghet Xog Lai Thik", artist: "RPT MCK", src: "./music/23. Ghet Xog Lai Thik.mp3" },
    { title: "Nhìn Kẻ Thù Của Tao", artist: "RPT MCK", src: "./music/24. Nhìn Kẻ Thù Của Tao.mp3" },
    { title: "Envy (feat. THANHDRAW)", artist: "RPT MCK", src: "./music/25. Envy (feat. THANHDRAW).mp3" },
    { title: "Cảm Ơn", artist: "RPT MCK", src: "./music/26. Cảm Ơn.mp3" },
    { title: "Không Cần Lo Cho Tao", artist: "RPT MCK", src: "./music/27. Không Cần Lo Cho Tao.mp3" },
    { title: "Huh (feat. RPT Orijinn & THANHDRAW)", artist: "RPT MCK", src: "./music/28. Huh (feat. RPT Orijinn & THANHDRAW).mp3" },
    { title: "Nguyễn Văn Mười", artist: "RPT MCK", src: "./music/29. Nguyễn Văn Mười.mp3" },
    { title: "Thịt Lợn", artist: "RPT MCK", src: "./music/30. Thịt Lợn.mp3" },
    { title: "xương rồng (intro)", artist: "dangrangto, DONAL", src: "./music/31. xương rồng (intro).mp3" },
    { title: "my lil bitch (feat. TeuYungBoy)", artist: "dangrangto, DONAL", src: "./music/32. my lil Bitch (feat. TeuYungBoy).mp3" },
    { title: "cây màu đen (feat. MR LANH, LWKI)", artist: "dangrangto, DONAL", src: "./music/33. cây màu đen (feat. MR LANH, LWKI).mp3" },
    { title: "buổi sáng Khương Đình (feat. BIG WIND)", artist: "dangrangto, DONAL", src: "./music/34. buổi sáng Khương Đình (feat. BIG WIND).mp3" },
    { title: "vùng vẫy (feat. ZEXZEX)", artist: "dangrangto, DONAL", src: "./music/35. vùng vẫy (feat. ZEXZEX).mp3" },
    { title: "baby anh đợi có lâu", artist: "dangrangto, DONAL", src: "./music/36. baby anh đợi có lâu.mp3" },
    { title: "wrong times (interlude)", artist: "dangrangto, DONAL", src: "./music/37. wrong times (interlude).mp3" },
    { title: "bolero buồn (feat. BIG WIND)", artist: "dangrangto, DONAL", src: "./music/38. bolero buồn (feat. BIG WIND).mp3" },
    { title: "một ly (feat. Hoàng Tôn)", artist: "dangrangto, DONAL", src: "./music/39. một ly (feat. Hoàng Tôn).mp3" },
    { title: "đánh rơi (feat. MICKEY)", artist: "dangrangto, DONAL", src: "./music/40. đánh rơi (feat. MICKEY).mp3" },
    { title: "tốt cho anh", artist: "dangrangto, DONAL", src: "./music/41. tốt cho anh.mp3" },
    { title: "quenvaonhau", artist: "dangrangto, DONAL", src: "./music/42. quenvaonhau.mp3" },
    { title: "món quà", artist: "dangrangto, DONAL", src: "./music/43. món quà.mp3" },
    { title: "đắm say trong tình yêu", artist: "dangrangto, DONAL", src: "./music/44. đắm say trong tình yêu.mp3" },
    { title: "để dành cho em", artist: "dangrangto, DONAL", src: "./music/45. để dành cho em.mp3" },
    { title: "thế giới của anh", artist: "dangrangto, DONAL", src: "./music/46. thế giới của anh.mp3" },
    { title: "hãy đến đây bên anh trong một chiều mùa thu...", artist: "dangrangto, DONAL", src: "./music/47. hãy đến đây bên anh trong một chiều mùa thu....mp3" },
    { title: "cà phê phin (feat. flames)", artist: "Dfoxie37, Tuann", src: "./music/48. cà phê phin (feat. flames).mp3" },
    { title: "bụi sao", artist: "Dfoxie37, Tuann", src: "./music/49. bụi sao.mp3" },
    { title: "tất cả là một (feat. Hale)", artist: "Dfoxie37, Tuann", src: "./music/50. tất cả là một (feat. Hale).mp3" },
    { title: "họ", artist: "Dfoxie37, Tuann", src: "./music/51. họ.mp3" },
    { title: "dậy đi", artist: "Dfoxie37, Tuann", src: "./music/52. dậy đi.mp3" },
    { title: "tĩnh (feat. luyn, Blacka)", artist: "Dfoxie37, Tuann", src: "./music/53. tĩnh (feat. luyn, Blacka).mp3" },
    { title: "xoay (feat. luyn, Rick)", artist: "Dfoxie37, Tuann", src: "./music/54. xoay (feat. luyn, Rick).mp3" },
    { title: "chúa trời", artist: "Dfoxie37, Tuann", src: "./music/55. chúa trời.mp3" },
    { title: "hello em có khỏe không (feat. Myhoa)", artist: "Dfoxie37, Tuann", src: "./music/56. hello em có khỏe không (feat. Myhoa).mp3" },
    { title: "ngày (feat. Myhoa)", artist: "Dfoxie37, Tuann", src: "./music/57. ngày (feat. Myhoa).mp3" },
    { title: "cuối tuần (feat. Tọi, Nuilillaw)", artist: "Dfoxie37, Tuann", src: "./music/58. cuối tuần (feat. Tọi, Nuilillaw).mp3" },
    { title: "thế giới giả lập (feat. luyn)", artist: "Dfoxie37, Tuann", src: "./music/59. thế giới giả lập (feat. luyn).mp3" }
  ];

  let currentTrackIndex = 0;
  let isPlaying = false;
  let isShuffle = false;
  let repeatMode = 'off'; // 'off', 'all', 'one'
  let previousVolume = 1;

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
  const repeatIcon = document.getElementById("repeat-icon");

  const progressBar = document.getElementById("progress-bar");
  const progressContainer = document.getElementById("progress-container");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");
  
  const volumeIcon = document.getElementById("volume-icon");
  const volumeSlider = document.getElementById("volume-slider");
  const playlistEl = document.getElementById("playlist");

  // Audio Functions
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
          console.warn("Playback error:", err);
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

  function handleTrackEnded() {
    if (repeatMode === 'one') {
      loadTrack(currentTrackIndex);
      playTrack();
    } else if (repeatMode === 'all') {
      nextTrack();
    } else {
      if (currentTrackIndex < tracks.length - 1 || isShuffle) {
        nextTrack();
      } else {
        pauseTrack();
      }
    }
  }

  function toggleRepeatMode() {
    if (repeatMode === 'off') {
      repeatMode = 'all';
      repeatBtn.classList.add('active');
      repeatIcon.className = 'fa-solid fa-repeat';
      repeatBtn.title = 'Repeat Mode: All';
    } else if (repeatMode === 'all') {
      repeatMode = 'one';
      repeatBtn.classList.add('active');
      repeatIcon.className = 'fa-solid fa-arrows-to-dot';
      repeatBtn.title = 'Repeat Mode: Track 1';
    } else {
      repeatMode = 'off';
      repeatBtn.classList.remove('active');
      repeatIcon.className = 'fa-solid fa-repeat';
      repeatBtn.title = 'Repeat Mode: Off';
    }
  }

  function updateVolumeUI() {
    const vol = audio.volume;
    volumeSlider.value = vol;

    if (vol === 0) {
      volumeIcon.className = "fa-solid fa-volume-xmark volume-btn";
    } else if (vol < 0.5) {
      volumeIcon.className = "fa-solid fa-volume-low volume-btn";
    } else {
      volumeIcon.className = "fa-solid fa-volume-high volume-btn";
    }
  }

  function toggleMute() {
    if (audio.volume > 0) {
      previousVolume = audio.volume;
      audio.volume = 0;
    } else {
      audio.volume = previousVolume || 1;
    }
    updateVolumeUI();
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
      li.innerHTML = `
        <span class="playlist-item-title">${index + 1}. ${track.title}</span>
        <span class="playlist-item-artist">${track.artist}</span>
      `;
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
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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

  if (repeatBtn) repeatBtn.addEventListener("click", toggleRepeatMode);
  if (volumeIcon) volumeIcon.addEventListener("click", toggleMute);

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      audio.volume = parseFloat(e.target.value);
      updateVolumeUI();
    });
  }

  if (audio) {
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleTrackEnded);
  }

  if (progressContainer) progressContainer.addEventListener("click", setProgress);

  // Keyboard controls
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      togglePlay();
    }
  });

  // Initial Load
  renderPlaylist();
  if (tracks.length > 0) {
    loadTrack(0);
  }
});