const hamburgerIcon = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const musicImages = document.querySelectorAll(".music-img");
const musicPlayer = document.querySelectorAll(".player");

hamburgerIcon.addEventListener("click", () => {    
    hamburgerIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
    });
document.querySelectorAll("li").forEach(hbIcon => hbIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("active");
    navMenu.classList.remove("active");
    }));

musicImages.forEach((mImg, i) => {
    mImg.addEventListener("mouseenter", () => {
        musicPlayer.forEach(audio => (audio.currentTime = 100));
        musicPlayer[i].play();
    });
    mImg.addEventListener("mouseout", () => {
        musicPlayer.forEach(audio => audio.pause());
    });
});

