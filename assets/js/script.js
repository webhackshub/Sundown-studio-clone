let scroll = new LocomotiveScroll({
    el: document.querySelector(".website"),
    smooth: true
});

var loader = document.querySelector(".loader")
setTimeout(function(){
    loader.style.top = "-120%"
},4200)

var elementContainer = document.querySelector(".element-container");
var projectImageContainer = document.querySelector(".projectimagecontainer");
var allProjectsButton = document.querySelector(".projects button");

var elements = document.querySelectorAll(".element");

elements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        var image = element.getAttribute("data-image");
        projectImageContainer.style.backgroundImage = `url(${image})`;
        projectImageContainer.style.display = "block";
    });

    element.addEventListener("mouseleave", function () {
        projectImageContainer.style.display = "none";
    });
});

allProjectsButton.addEventListener("mouseenter", function () {
    projectImageContainer.style.display = "none";
});

allProjectsButton.addEventListener("mouseleave", function (e) {
    if (!elementContainer.contains(e.relatedTarget)) {
        projectImageContainer.style.display = "block";
    }
});


document.addEventListener('DOMContentLoaded', function() {
    showContent('design');
});

function showContent(contentType) {
    var paragraphs = document.querySelectorAll('.bottom p');
    var images = document.querySelectorAll('.right img');
    paragraphs.forEach(para => {
        para.classList.remove('active-paragraph');
        para.style.opacity = '0';
    });
    images.forEach(img => {
        img.classList.remove('active-image');
        img.style.opacity = '0';
    });

    var activeParagraph = document.querySelector('.' + contentType + '-paragraph');
    var activeImage = document.querySelector('.right img.' + contentType + '-image');
    activeParagraph.classList.add('active-paragraph');
    activeParagraph.style.opacity = '1';
    activeImage.classList.add('active-image');
    activeImage.style.opacity = '1';

    var links = document.querySelectorAll('.left .top a');
    links.forEach(link => link.classList.remove('active'));
    document.querySelector('.' + contentType).classList.add('active');
}

var links = document.querySelectorAll('.left .top a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        var contentType = this.getAttribute('onclick').match(/\('(.*)'\)/)[1];
        showContent(contentType);
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });

var menu = document.querySelector(".menu-bar")
var menuBack = document.querySelector(".menu-background")
var navBrand = document.querySelector(".navbar img")
var menuOpen = document.querySelector(".menu-bar .open")
var menuClose = document.querySelector(".menu-bar .close")
var flag = 0

menu.addEventListener("click", function(){
    if(flag == 0){
        menuBack.style.top = "0"
        navBrand.style.opacity = "0"
        menuOpen.style.transform = "translate(0, 5px) rotate(45deg)"
        menuClose.style.transform = "translate(0, -1px) rotate(-45deg)"
        flag = 10
    }
    else {
        menuBack.style.top = "-100%"
        navBrand.style.opacity = "1"
        menuOpen.style.transform = "translate(0) rotate(0"
        menuClose.style.transform = "translate(0) rotate(0)"
        flag = 0
    }
})