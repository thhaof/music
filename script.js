const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "music/song1.mp3",
        cover: "https://via.placeholder.com/180/2b80dd/ffffff?text=thhaof"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "music/song2.mp3",
        cover: "https://via.placeholder.com/180/1a5ca3/ffffff?text=thhaof"
    }
];

let currentSongIndex = 0;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const playlistEl = document.getElementById("playlist");

// Tải bài hát
function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

// Render Playlist
function renderPlaylist() {
    playlistEl.innerHTML = "";
    songs.forEach((song, index) => {
        const li = document.createElement("li");
        li.innerText = `${song.title} - ${song.artist}`;
        if (index === currentSongIndex) li.classList.add("active");
        li.addEventListener("click", () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playSong();
            renderPlaylist();
        });
        playlistEl.appendChild(li);
    });
}

function playSong() {
    audio.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pauseSong() {
    audio.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

playBtn.addEventListener("click", () => {
    const isPlaying = !audio.paused;
    isPlaying ? pauseSong() : playSong();
});

prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
    renderPlaylist();
});

nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
    renderPlaylist();
});

// Cập nhật thanh tiến trình
audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = progressPercent;
    }
});

progress.addEventListener("change", () => {
    audio.currentTime = (progress.value * audio.duration) / 100;
});

// Khởi chạy
loadSong(songs[currentSongIndex]);
renderPlaylist();