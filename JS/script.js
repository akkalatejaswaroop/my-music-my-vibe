// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/dhoomdhaam.jpg";
  song.src = "./assets/Songs/dhoomdhaam.mp3";
  songName.innerText = "Dhoom Dhaam";
  songBy.innerText = "Santhosh Narayan";
  title.innerText = "Dhoom Dhaam";
  download.href = "./assets/Songs/dhoomdhaam.mp3";
  aboutSong.innerText = "Dhoom Dhaam Dhosthaan is a lively, energetic, and culturally authentic party song from the movie Dasara. It features Nani in a carefree avatar, socializing and enjoying with friends, set against a backdrop of a working-class neighborhood. The song is described as having a Telangana-style folk influence, with a local street vibe, and showcases Nani's character's positive outlook on life.  ";
});

buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/gusagusalade.png";
  song.src = "./assets/Songs/gusagusalade.mp3";
  songName.innerText = "Gusa Gusa Lade";
  songBy.innerText = "Karthik & Pranavi";
  title.innerText = " Gusa Gusa Lade";
  download.href = "./assets/Songs/gusagusalade.mp3";
  aboutSong.innerText = "“It is a romantic song composed by Mani Sharma, with lyrics by Ramajogayya Sastry. The song is sung by Karthik and Pranavi Acharya. It is known for its melodious tune and picturization.";
});

buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/iwannafly.jpg";
  song.src = "./assets/Songs/iwannafly.mp3";
  songName.innerText = "I Wanna Fly";
  songBy.innerText = "L. V. Revanth, Sanjith Hegde, & Hiphop Tamizha";
  title.innerText = "I Wanna Fly";
  download.href = "./assets/Songs/iwannafly.mp3";
  aboutSong.innerText = "One version, featured in the movie Krishnarjuna Yudham, is a romantic Telugu song expressing longing and love, with lyrics about wanting to fly towards a loved one and experience a feeling of freedom and happiness";
});


buttons[3].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/kallumoosi.jpeg";
  song.src = "./assets/Songs/kallumoosi.mp3";
  songName.innerText = " Kallumoosi";
  songBy.innerText = " Suchit Suresan";
  title.innerText = "Kallumoosi";
  download.href = "./assets/Songs/kallumoosi.mp3";
  aboutSong.innerText = `"The song is a romantic melody where the lyrics describe the feeling of love blossoming quickly, as if "within the blink of an eye`;
});

buttons[4].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/spirit.jpg";
  song.src = "./assets/Songs/spirit.mp3";
  songName.innerText = "Spirit Of Jersey";
  songBy.innerText = "Anirudh Ravichander";
  title.innerText = "Spirit Of Jersey";
  download.href = "./assets/Songs/spirit.mp3";
  aboutSong.innerText = `"The song portrays the spirit of determination and perseverance, using the metaphor of a jersey and the context of cricket to convey a message of overcoming challenges and achieving success. It emphasizes staying strong, facing obstacles head-on, and never giving up`;
});