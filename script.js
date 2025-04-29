let songs = [
    {
        title: "Uska Hi Banana",
        img: "images/ar1.jpg",
        artist: "Arijit Singh",
        src: "songs/Uska Hi Banana(PagalWorld.com.so).mp3"
    },
    {
        title: "Kalank",
        img: "images/ar3.jpg",
        artist: "Arijit Singh",
        src: "songs/03 - Kalank (Title Track) - DownloadMing.SE.mp3"
    },
    {
        title: "Main Adhura",
        img: "images/ar3.jpg",
        artist: "Arijit Singh",
        src: "songs/Main-Adhura-Ji-Raha-Hu(PagalWorld).mp3"
    },
    {
        title: "Tu Mohabbat Hai",
        img: "images/ar3.jpg",
        artist: "Arijit Singh",
        src: "songs/Tu Mohabbat Hai Ishq Hai Mera(PagalWorld.com.so).mp3"
    },
    {
        title: "Cheri Cheri Lady",
        img: "images/b1.jpg",
        artist: "Modern Taking",
        src: "songs/Cheri-Cheri-Lady.mp3"
    },

];

let SongIndex = 0;
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let progress = document.getElementById("progress");

function loadSong(index) {
    document.getElementById("song-img").src = songs[index].img;
    document.getElementById("song-title").innerHTML = songs[index].title;
    document.getElementById("song-artist").innerHTML = songs[index].artist;
    document.getElementById("song-source").src = songs[index].src;

    song.load();

}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.add("fa-play");
        ctrlIcon.classList.remove("fa-pause");

    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");

    }

}

function prevSong() {
    SongIndex = (SongIndex - 1 + songs.length) % songs.length;
    loadSong(SongIndex);

    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");

}

function nextSong() {
    SongIndex = (SongIndex + 1) % songs.length;
    loadSong(SongIndex);

    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");

}

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
    
}

progress.onchange = function() {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");


    
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
    
}