const pageTitle = document.title;
const imgSrcA = "./images/img_Diploma_A.webp";
const imgSrcB = "./images/img_Diploma_B.webp";

/*-- IMG CHANGES --*/
function changeDiplomaImg() {
    var diplomaImg = document.getElementById("DiplomaImg");

    if(diplomaImg.src.includes("img_Diploma_A.webp")) {
        diplomaImg.src = "./images/img_Diploma_B.webp";
    } else if(diplomaImg.src.includes("img_Diploma_B.webp")) {
        diplomaImg.src = "./images/img_Diploma_A.webp";
    }
}

function changeRobinsonImg() {
    var robinsonImg = document.getElementById("RobinsonImg");

    if(robinsonImg.src.includes("img_Robinson_A")) {
        robinsonImg.src = "./images/img_Robinson_B.webp";
    } else if(robinsonImg.src.includes("img_Robinson_B")) {
        robinsonImg.src = "./images/img_Robinson_A.webp";
    }
}

function changeEventImg() {
    var eventImg = document.getElementById("EventImg");

    if(eventImg.src.includes("img_Event_A")) {
        eventImg.src = "./images/img_Event_B.webp";
    } else if(eventImg.src.includes("img_Event_B")) {
        eventImg.src = "./images/img_Event_A.webp";
    }
}

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

function darkMode() {
    var colorSetAItems = document.querySelectorAll(".colorSetA");
    var colorSetBItems = document.querySelectorAll(".colorSetB");
    var socialIcons = document.querySelectorAll(".socialIcon");

    for(var i = 0; i < colorSetAItems.length; i++) {
        co
        colorSetAItems[i].classList.toggle("colorSetADark");
    }

    for(var i = 0; i < colorSetBItems.length; i++) {
        colorSetBItems[i].classList.toggle("colorSetBDark");
    }



    for(var i = 0; i < socialIcons.length; i++) {
        socialIcons[i].classList.toggle("socialIconDark")
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