
// particles

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.4,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": false
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
//   getSpeed: true,
//   getDirection: true
// });

// locoScroll.on("scroll", ScrollTrigger.update);
// ScrollTrigger.scrollerProxy('[data-scroll-container]', {
// scrollTop(value) {
//   return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
// }, 
// getBoundingClientRect() {
// return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
// },
// pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
// });

// hero-banner image animation
document.querySelectorAll(".parallax-wrap").forEach(parallaxWrap =>
	parallaxWrap.addEventListener("mousemove", ({ clientX, clientY }) => {
		parallaxWrap.style.setProperty("--x", clientX);
		parallaxWrap.style.setProperty("--y", clientY);
	}),
);

function myFunction() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value).then(function() {
    // Show the snackbar when the copy operation is successful
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function() {
      snackbar.className = snackbar.className.replace("show", "");
    }, 3000); // Change 3000 to the number of milliseconds you want the snackbar to be visible
  });
}

