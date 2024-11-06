// Constants
const head = document.querySelector(".heading"),
  over = document.querySelector(".overlay"),
  clear = document.querySelector(".intro-text"),
  section = document.querySelectorAll(".unique"),
  navLinks = document.querySelectorAll(".nav-link"),
  divs = document.querySelectorAll(".anim-one"),
  twos = document.querySelectorAll(".two");
let bTn = document.querySelector("#btt");

// Page before Reload
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

// Navbar closing on outside click - Jquery
$(document).ready(function () {
  $(document).click(function () {
    $(".navbar-collapse").collapse("hide");
  });
  $(".navbar").on("click", "a", function () {
    $(".navbar a.active").removeClass("active");
    $(this).addClass("active");
  });
});

//Intersection Observers  -- Animations
let options = {
  threshold: 0.4,
};
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
}, options);
observer.observe(head);
observer.observe(over);
observer.observe(clear);

// Intersection Observer --- Animations
let option_2 = {
  threshold: 0.3,
};
let observer_2 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("fade-in");
    }
  });
}, option_2);
divs.forEach((div) => {
  observer.observe(div);
});
twos.forEach((two) => {
  observer.observe(two);
});

// Copy cert. No.
const copy = document.querySelectorAll(".text");

copy.forEach((text) => {
  const butt = text.querySelector("#copy");
  const paragraphh = text.querySelector("span");
  butt.addEventListener("click", () => {
    navigator.clipboard.writeText(paragraphh.textContent);
    butt.innerHTML = "Copied";
    setTimeout(function () {
      butt.innerHTML = '<i class="fa-solid fa-copy fa-1x"></>';
    }, 2000);
  });
});

//Original code - For preloader
// let newFunction;
// const headr = document.querySelector("header"),
//   main = document.querySelector("main"),
//   footer = document.querySelector("footer");

// function myFunction() {
//   newFunction = setTimeout(() => {
//     document.querySelector(".preloader").style.opacity = 0;
//     headr.style.display = "block";
//     main.style.display = "block";
//     footer.style.display = "block";
//     setTimeout(() => {
//       document.querySelector(".preloader").style.display = "none";
//     }, 1000);
//   }, 1050);
// }

// For preloader
function myFunction() {
  // Scroll to the top of the page on load or reload if no hash is present
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
  // Check if this is the first load
  if (!localStorage.getItem("pageLoaded")) {
    setTimeout(() => {
      // Page before loading
      // window.onbeforeunload = function () {
      //   window.scrollTo(0, 0);
      // };
      document.querySelector(".preloader").style.opacity = 0;
      document.querySelector("header").style.display = "block";
      document.querySelector("main").style.display = "block";
      document.querySelector("footer").style.display = "block";
      setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
      }, 1500);

      // Set the flag in localStorage
      localStorage.setItem("pageLoaded", "true");
    }, 1050);
  } else {
    // If not first load, show content immediately
    document.querySelector(".preloader").style.display = "none";
    document.querySelector("header").style.display = "block";
    document.querySelector("main").style.display = "block";
    document.querySelector("footer").style.display = "block";
  }
}
// Call myFunction when the page loads
window.onload = myFunction;

// Using a media query
x = window.matchMedia("(max-width:768px)");
if (x.matches) {
  setTimeout(() => {
    document.querySelector(".preloader").style.opacity = 0;
    document.querySelector(".preloader").style.display = "none";
  }, 100);
}
