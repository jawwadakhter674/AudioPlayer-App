


const play = document.getElementById("play")
const music = document.querySelector('audio')
const image = document.querySelector("img")
const pause = document.getElementsByClassName("fa-pause")
var titleName = document.getElementById("title")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var artist = document.getElementById("artist")

let isPlay = false;

const playMusic = () => {
    isPlay = true;
    music.play()
    play.classList.replace("fa-play", "fa-pause")
    image.classList.add("anime")

}

const pauseMusic = () => {
    music.pause();
    isPlay = false
    image.classList.remove("anime")
    play.classList.replace("fa-pause", "fa-play")
}

play.addEventListener('click', () => {
    isPlay ? pauseMusic() : playMusic()
})

const loadWindow= async()=>{
    var fetchData= await fetch('./music.json')
var data= await fetchData.json()

    
    const loadSongs = (song) => {
        console.log(song)
        titleName.textContent = song.title
        artist.textContent = song.artist
        music.src = "/music/"+song.name+'.mp3'
    }
    
    
    
    var songIndex = 0;
    
    
    const nextSong = () => {
        
        songIndex = (songIndex + 1) % data.length;
        
        loadSongs(data[songIndex])
        playMusic()
        
        
        
        
    }


    const prevSong=()=>{
        // songIndex--;
        songIndex = (songIndex - 1 + data.length) % data.length;
        
        loadSongs(data[songIndex])
        playMusic()
    }
    
    next.addEventListener('click',nextSong)
    prev.addEventListener('click', prevSong)
    
}
loadWindow()


