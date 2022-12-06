let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');

}
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');

}
window.onscroll = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');

    }
    else {
        document.querySelector('.header').classList.remove('active');

    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}
window.onload = () => {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');

    }
    else {
        document.querySelector('.header').classList.remove('active');

    }
}
document.querySelector('.home').onmousemove =(e) => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerWidth - e.pageY * speed) / 90;
        elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

    });
};
document.querySelector('.home').onmousemoveleave =() => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
       
        elm.style.transform = `translateX(0px) translateY(0px)`;

    });
};
var swiper = new Swiper(".vehicles-slider", {
    grabCursor: true,
    centeredSlides: true,  
    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }