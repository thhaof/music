document.addEventListener("DOMContentLoaded", () => {
  const tracks = [
    { title: "Elegie", artist: "MCK", src: "./music/01. Elegie.mp3" },
    { title: "IDK", artist: "MCK", src: "./music/02. IDK.mp3" },
    { title: "Wtf Bby I'm Lit", artist: "MCK", src: "./music/03. Wtf Bby I_m Lit.mp3" },
    { title: "Anh Không Muốn Nó Dễ Dàng", artist: "MCK", src: "./music/04. Anh Không Muốn Nó Dễ Dàng.mp3" },
    { title: "Baby (feat. marzuz)", artist: "MCK", src: "./music/05. Baby (feat. marzuz).mp3" },
    { title: "Yêu Anh Giết Anh", artist: "MCK", src: "./music/06. Yêu Anh Giết Anh.mp3" },
    { title: "Mắt Môi Tay Chân (feat. Tage)", artist: "MCK", src: "./music/07. Mắt Môi Tay Chân (feat. Tage).mp3" },
    { title: "Đao Của Anh Vừa", artist: "MCK", src: "./music/08. Đao Của Anh Vừa.mp3" },
    { title: "Là Gì Của Nhau", artist: "MCK", src: "./music/09. Là Gì Của Nhau.mp3" },
    { title: "Night In Prague", artist: "MCK", src: "./music/10. Night In Prague.mp3" },
    { title: "Một Cái Ôm", artist: "MCK", src: "./music/11. Một Cái Ôm.mp3" },
    { title: "Liệm", artist: "MCK", src: "./music/12. Liệm.mp3" },
    { title: "Nếu Như Ta Chẳng Còn (feat. ASAP Ướt Mi)", artist: "MCK", src: "./music/13. Nếu Như Ta Chẳng Còn (feat. ASAP Ướt Mi).mp3" },
    { title: "Ai Mới Là Kẻ Xấu Xa", artist: "MCK", src: "./music/14. Ai Mới Là Kẻ Xấu Xa.mp3" },
    { title: "Slippery (feat. Tùng Dương)", artist: "MCK", src: "./music/15. Slippery (feat. Tùng Dương).mp3" },
    { title: "Intenpol", artist: "MCK", src: "./music/16. Intenpol.mp3" },
    { title: "Tây Thi", artist: "MCK", src: "./music/17. Tây Thi.mp3" },
    { title: "Hút và Hút", artist: "MCK", src: "./music/18. Hút và Hút.mp3" },
    { title: "Dưa Chua", artist: "MCK", src: "./music/19. Dưa Chua.mp3" },
    { title: "Xa Xôi (feat. Obito)", artist: "MCK", src: "./music/20. Xa Xôi (feat. Obito).mp3" },
    { title: "Che Phủ", artist: "MCK", src: "./music/21. Che Phủ.mp3" },
    { title: "Oanh M = Thuoc", artist: "MCK", src: "./music/22. Oanh M = Thuoc.mp3" },
    { title: "Ghet Xog Lai Thik", artist: "MCK", src: "./music/23. Ghet Xog Lai Thik.mp3" },
    { title: "Nhìn Kẻ Thù Của Tao", artist: "MCK", src: "./music/24. Nhìn Kẻ Thù Của Tao.mp3" },
    { title: "Envy (feat. THANHDRAW)", artist: "MCK", src: "./music/25. Envy (feat. THANHDRAW).mp3" },
    { title: "Cảm Ơn", artist: "MCK", src: "./music/26. Cảm Ơn.mp3" },
    { title: "Không Cần Lo Cho Tao", artist: "MCK", src: "./music/27. Không Cần Lo Cho Tao.mp3" },
    { title: "Huh (feat. RPT Orijinn & THANHDRAW)", artist: "MCK", src: "./music/28. Huh (feat. RPT Orijinn & THANHDRAW).mp3" },
    { title: "Nguyễn Văn Mười", artist: "MCK", src: "./music/29. Nguyễn Văn Mười.mp3" },
    { title: "Thịt Lợn", artist: "MCK", src: "./music/30. Thịt Lợn.mp3" },
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
  let repeatMode = 'off';
  let previousVolume = 1;

  // DOM Elements
  const audio = document.getElementById("audio-player");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");

  const playBtn = document.getElementById("play-btn");
  const playIcon = document.getElementById("play-icon");
  const heroPlayBtn = document.getElementById("hero-play-btn");
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
  const totalTracksCount = document.getElementById("total-tracks-count");

  function formatTime(seconds) {
    if (isNaN(seconds) || seconds === 0) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function loadTrack(index) {
    if (tracks.length === 0) return;
    currentTrackIndex = index;
    const track = tracks[currentTrackIndex];
    if (title) title.textContent = track.title;
    if (artist) artist.textContent = track.artist;
    if (audio) audio.src = track.src;

    updatePlaylistHighlight();
  }

  function playTrack() {
    if (tracks.length === 0 || !audio) return;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlaying = true;
          if (playIcon) playIcon.className = "fa-solid fa-circle-pause";
          if (heroPlayBtn) heroPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        })
        .catch((err) => {
          console.warn("Playback error:", err);
          isPlaying = false;
          if (playIcon) playIcon.className = "fa-solid fa-circle-play";
          if (heroPlayBtn) heroPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        });
    }
  }

  function pauseTrack() {
    isPlaying = false;
    if (audio) audio.pause();
    if (playIcon) playIcon.className = "fa-solid fa-circle-play";
    if (heroPlayBtn) heroPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
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
      if (repeatBtn) repeatBtn.classList.add('spotify-active');
      if (repeatIcon) repeatIcon.className = 'fa-solid fa-repeat';
    } else if (repeatMode === 'all') {
      repeatMode = 'one';
      if (repeatBtn) repeatBtn.classList.add('spotify-active');
      if (repeatIcon) repeatIcon.className = 'fa-solid fa-arrows-to-dot';
    } else {
      repeatMode = 'off';
      if (repeatBtn) repeatBtn.classList.remove('spotify-active');
      if (repeatIcon) repeatIcon.className = 'fa-solid fa-repeat';
    }
  }

  function updateVolumeUI() {
    if (!audio || !volumeSlider || !volumeIcon) return;
    const vol = audio.volume;
    volumeSlider.value = vol;

    const percentage = vol * 100;
    volumeSlider.style.background = `linear-gradient(to right, #1db954 ${percentage}%, #4d4d4d ${percentage}%)`;

    if (vol === 0) {
      volumeIcon.className = "fa-solid fa-volume-xmark spotify-icon-btn";
    } else if (vol < 0.5) {
      volumeIcon.className = "fa-solid fa-volume-low spotify-icon-btn";
    } else {
      volumeIcon.className = "fa-solid fa-volume-high spotify-icon-btn";
    }
  }

  function toggleMute() {
    if (!audio) return;
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
    if (progressBar) progressBar.style.width = `${progressPercent}%`;

    if (currentTimeEl) currentTimeEl.textContent = formatTime(currentTime);
    if (durationEl) durationEl.textContent = formatTime(duration);
  }

  function setProgress(e) {
    if (tracks.length === 0 || !audio) return;
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    if (!isNaN(duration)) {
      audio.currentTime = (clickX / width) * duration;
    }
  }

  function renderPlaylist() {
    if (!playlistEl) return;
    playlistEl.innerHTML = "";

    if (totalTracksCount) totalTracksCount.textContent = `${tracks.length} tracks`;

    tracks.forEach((track, index) => {
      const tr = document.createElement("tr");
      tr.className = "spotify-track-row";
      tr.innerHTML = `
        <td class="col-num track-number">
          <span class="num-text">${index + 1}</span>
          <i class="fa-solid fa-play row-play-icon"></i>
        </td>
        <td class="col-title track-title-text">${track.title}</td>
        <td class="col-artist track-artist-text">${track.artist}</td>
        <td class="col-action">
          <button class="like-btn" title="Save to Your Library">
            <i class="fa-regular fa-heart"></i>
          </button>
        </td>
      `;

      tr.addEventListener("click", (e) => {
        if (e.target.closest(".like-btn")) {
          const heart = e.target.closest(".like-btn").querySelector("i");
          heart.classList.toggle("fa-regular");
          heart.classList.toggle("fa-solid");
          heart.classList.toggle("liked");
          return;
        }
        loadTrack(index);
        playTrack();
      });

      playlistEl.appendChild(tr);
    });
  }

  function updatePlaylistHighlight() {
    if (!playlistEl) return;
    const rows = playlistEl.querySelectorAll(".spotify-track-row");
    rows.forEach((row, index) => {
      if (index === currentTrackIndex) {
        row.classList.add("spotify-row-active");
        row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        row.classList.remove("spotify-row-active");
      }
    });
  }

  // Event Listeners
  if (playBtn) playBtn.addEventListener("click", togglePlay);
  if (heroPlayBtn) heroPlayBtn.addEventListener("click", togglePlay);
  if (prevBtn) prevBtn.addEventListener("click", prevTrack);
  if (nextBtn) nextBtn.addEventListener("click", nextTrack);

  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      isShuffle = !isShuffle;
      shuffleBtn.classList.toggle("spotify-active", isShuffle);
    });
  }

  if (repeatBtn) repeatBtn.addEventListener("click", toggleRepeatMode);
  if (volumeIcon) volumeIcon.addEventListener("click", toggleMute);

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      if (audio) audio.volume = parseFloat(e.target.value);
      updateVolumeUI();
    });
  }

  if (audio) {
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleTrackEnded);
  }

  if (progressContainer) progressContainer.addEventListener("click", setProgress);

  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && e.target.tagName !== "INPUT") {
      e.preventDefault();
      togglePlay();
    }
  });

  // Initialization
  renderPlaylist();
  if (tracks.length > 0) {
    loadTrack(0);
  }
  updateVolumeUI();
});