(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

//pop-up modal
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const addHidden = function () {
  modal.classList.remove('hidden');
  modal.style.display = "flex";
  overlay.classList.remove('hidden');
  document.querySelector('header').classList.remove('fixed-top');
  document.getElementsByClassName('breadcrumbs')[0].style.marginTop = "0";
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', addHidden);
}

const removeHidden = function () {
  modal.style.display = "none";
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  document.querySelector('header').classList.add('fixed-top');
  document.getElementsByClassName('breadcrumbs')[0].style.marginTop = "73px";
};

closeModal.addEventListener('click', removeHidden);

let fakeheight = document.body.scrollHeight+99;
// document.getElementById('modalcheck').style.height = String(fakeheight);
// console.log(document.getElementById('modalcheck'));

document.getElementById('overlayId').setAttribute("style", `height : ${fakeheight}px`);

//to empty the pop-up
document.getElementsByClassName('close-modal')[0].addEventListener('click',function(){
    let xs = document.querySelectorAll('input');
    document.querySelector('textarea').value="";
    for(let i=0;i<xs.length;i++)
    {
      xs[i].value = "";
    }
  });


//roadmap-hover-boxes
document.getElementById('box1').addEventListener('mouseover', function () {
  document.querySelector('#box1 h3').style.background = "#185ADB";
  document.querySelector('#box1 h3').style.color = "#fff";

});
document.getElementById('box1').addEventListener('mouseout', function () {
  document.querySelector('#box1 h3').style.background = "#f8f8f8";
  document.querySelector('#box1 h3').style.color = "#777777";
});

document.getElementById('box2').addEventListener('mouseover', function () {
  document.querySelector('#box2 h3').style.background = "#185ADB";
  document.querySelector('#box2 h3').style.color = "#fff";

});
document.getElementById('box2').addEventListener('mouseout', function () {
  document.querySelector('#box2 h3').style.background = "#f8f8f8";
  document.querySelector('#box2 h3').style.color = "#777777";
});

document.getElementById('box3').addEventListener('mouseover', function () {
  document.querySelector('#box3 h3').style.background = "#185ADB";
  document.querySelector('#box3 h3').style.color = "#fff";

});
document.getElementById('box3').addEventListener('mouseout', function () {
  document.querySelector('#box3 h3').style.background = "#f8f8f8";
  document.querySelector('#box3 h3').style.color = "#777777";
});

document.getElementById('box4').addEventListener('mouseover', function () {
  document.querySelector('#box4 h3').style.background = "#185ADB";
  document.querySelector('#box4 h3').style.color = "#fff";

});
document.getElementById('box4').addEventListener('mouseout', function () {
  document.querySelector('#box4 h3').style.background = "#f8f8f8";
  document.querySelector('#box4 h3').style.color = "#777777";
});

})()
