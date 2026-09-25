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
  let isRepeat = false;
  let tracksPlayedCount = 0;
  let totalListeningSeconds = 0;

  const audio = document.getElementById("audio-player");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const playBtn = document.getElementById("play-btn");
  const playIcon = document.getElementById("play-icon");
  const heroPlayBtn = document.getElementById("hero-play-btn");
  const heroShuffleBtn = document.getElementById("hero-shuffle-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const shuffleBtn = document.getElementById("shuffle-btn");
  const repeatBtn = document.getElementById("repeat-btn");
  const progressBar = document.getElementById("progress-bar");
  const progressContainer = document.getElementById("progress-bar-container");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");
  const volumeSlider = document.getElementById("volume-slider");
  const volumeVal = document.getElementById("volume-val");
  const playlistEl = document.getElementById("playlist");

  const sessionPlayedEl = document.getElementById("session-played");
  const sessionTimeEl = document.getElementById("session-time");

  // Track session timer
  setInterval(() => {
    if (isPlaying) {
      totalListeningSeconds++;
      if (sessionTimeEl) {
        sessionTimeEl.textContent = `${Math.floor(totalListeningSeconds / 60)} min`;
      }
    }
  }, 1000);

  function formatTime(secs) {
    if (isNaN(secs) || secs === 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  function loadTrack(index) {
    currentTrackIndex = index;
    const track = tracks[currentTrackIndex];
    if (title) title.textContent = track.title;
    if (artist) artist.textContent = track.artist;
    if (audio) audio.src = track.src;
    highlightRow();
  }

  function playTrack() {
    audio.play().then(() => {
      isPlaying = true;
      playIcon.className = "fa-solid fa-pause";
      heroPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
    }).catch(err => console.warn(err));
  }

  function pauseTrack() {
    audio.pause();
    isPlaying = false;
    playIcon.className = "fa-solid fa-play";
    heroPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i> Play';
  }

  function togglePlay() {
    isPlaying ? pauseTrack() : playTrack();
  }

  function nextTrack() {
    tracksPlayedCount++;
    if (sessionPlayedEl) sessionPlayedEl.textContent = tracksPlayedCount;

    if (isShuffle) {
      currentTrackIndex = Math.floor(Math.random() * tracks.length);
    } else {
      currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    }
    loadTrack(currentTrackIndex);
    playTrack();
  }

  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
  }

  function renderTable() {
    playlistEl.innerHTML = "";
    
    // Update Stats
    document.getElementById("total-songs-count").textContent = `${tracks.length} songs`;
    const uniqueArtists = new Set(tracks.map(t => t.artist)).size;
    document.getElementById("total-artists-count").textContent = `${uniqueArtists} artists`;

    tracks.forEach((track, idx) => {
      const tr = document.createElement("tr");
      tr.className = "row-track";
      tr.innerHTML = `
        <td class="col-idx">${idx + 1}</td>
        <td class="col-cover"><div class="row-thumb"><i class="fa-solid fa-music"></i></div></td>
        <td class="col-title">${track.title}</td>
        <td class="col-artist">${track.artist}</td>
        <td class="col-time">--:--</td>
      `;

      tr.addEventListener("click", () => {
        loadTrack(idx);
        playTrack();
      });

      playlistEl.appendChild(tr);
    });
  }

  function highlightRow() {
    const rows = playlistEl.querySelectorAll(".row-track");
    rows.forEach((row, i) => {
      if (i === currentTrackIndex) {
        row.classList.add("active-row");
        row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        row.classList.remove("active-row");
      }
    });
  }

  // Audio Events
  audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
      const pct = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${pct}%`;
      currentTimeEl.textContent = formatTime(audio.currentTime);
      durationEl.textContent = formatTime(audio.duration);
    }
  });

  audio.addEventListener("ended", () => {
    if (isRepeat) {
      playTrack();
    } else {
      nextTrack();
    }
  });

  // UI Handlers
  playBtn.addEventListener("click", togglePlay);
  heroPlayBtn.addEventListener("click", togglePlay);
  prevBtn.addEventListener("click", prevTrack);
  nextBtn.addEventListener("click", nextTrack);

  shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle("active", isShuffle);
  });

  if (heroShuffleBtn) {
    heroShuffleBtn.addEventListener("click", () => {
      isShuffle = true;
      shuffleBtn.classList.add("active");
      nextTrack();
    });
  }

  repeatBtn.addEventListener("click", () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle("active", isRepeat);
  });

  progressContainer.addEventListener("click", (e) => {
    const w = progressContainer.clientWidth;
    const x = e.offsetX;
    if (!isNaN(audio.duration)) {
      audio.currentTime = (x / w) * audio.duration;
    }
  });

  volumeSlider.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    audio.volume = val;
    volumeVal.textContent = `${Math.round(val * 100)}%`;
  });

  // Init
  renderTable();
  loadTrack(0);
});
