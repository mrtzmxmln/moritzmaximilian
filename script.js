const pageTitle = document.title;
const imgSrcA = "./images/img_Diploma_A.webp";
const imgSrcB = "./images/img_Diploma_B.webp";

/*-- ANIMATIONS --*/
function fadeShort() {
    var fadeShort = document.querySelector(".fadeShort");
    
    setTimeout(function() {
        fadeShort.classList.add("active");
    }, 500);
}

function fadeIntro() {
    var fadeIntro = document.querySelector(".fadeIntro");

    setTimeout(function() {
        fadeIntro.classList.add("active");
    }, 1000);
}

function fadeRight() {
    var fadeRight = document.querySelectorAll(".fadeRight");

    for (var i = 0; i < fadeRight.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = fadeRight[i].getBoundingClientRect().top;
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
            fadeRight[i].classList.add("active");
        } else {
            fadeRight[i].classList.remove("active");
        }
    }
}

function fadeLeft() {
    var fadeLeft = document.querySelectorAll(".fadeLeft");

    for (var i = 0; i < fadeLeft.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = fadeLeft[i].getBoundingClientRect().top;
        var elementVisible = 200;
        
        if (elementTop < windowHeight - elementVisible) {
            fadeLeft[i].classList.add("active");
        } else {
            fadeLeft[i].classList.remove("active");
        }
    }
}

/*-- SCROLLS --*/
function scrollIntro() {
    const intro = document.getElementById("Intro");
    intro.scrollIntoView({behavior: "smooth"});
}

function scrollDiploma() {
    const diploma = document.getElementById("Diploma");
    diploma.scrollIntoView({behavior: "smooth"});
}

function scrollEvent() {
    const event = document.getElementById("Event");
    event.scrollIntoView({behavior: "smooth"});
}

function scrollWebDev() {
    const webdev = document.getElementById("WebDev");
    webdev.scrollIntoView({behavior: "smooth"});
}

function scrollArtist() {
    const artist = document.getElementById("Artist");
    artist.scrollIntoView({behavior: "smooth"});
}

/*-- LINKS --*/
function openSoundCloud() {
    window.open("https://soundcloud.com/mrtzmxmln");
}

function openInstagram() {
    window.open("https://www.instagram.com");
}

function openFacebook() {
    window.open("https://facebook.com/mrtzmxmln")
}

function openResident() {
    window.open("https://ra.co/dj/moritzmaximilian");
}

function openPiknic() {
    window.open("http://mrtzmxmln.github.io/risingufo");
}

function openAcademy() {
    window.open("https://www.macromedia-ausbildung.de")
}

function openProject() {
    window.open("https://www.facebook.com/querdenkerduell");
}

function openUfo() {
    window.open("https://mrtzmxmln.github.io/risingufo")
}

function openLeni() {
    window.open("https://homebyleni.de");
}

function sendMail() {
    window.open("mailto:moritzmaximilian@gmx.net")
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/moritz-meyer-77562a231/");
}

function openXing() {
    window.open("https://www.xing.com/profile/Moritz_Meyer65/cv");
}

function openHome() {
    window.open("./index.html", "_self");
}

/*-- TEXT CHANGES --*/
function tabHidden() {
    var attentionMessage = "Free Cookies! 🍪";
    var pageActive = !document.hidden;

    if(!pageActive) {
        document.title = attentionMessage;
        blink();
    } else if(pageActive) {
        document.title = pageTitle;
    }
}

/*-- execute Script --*/
window.addEventListener("scroll", fadeRight);
window.addEventListener("scroll", fadeLeft);
window.addEventListener("visibilitychange", tabHidden);

function loadCheck(){
    var loader = document.getElementById("Loader");
    setTimeout(function(){
        loader.classList.add("loadingScreenHide");
        setTimeout(function(){
            loader.classList.add("loadingScreenOff");
        }, 2000);
        fadeShort();
        fadeIntro();
    }, 2000)   
}
