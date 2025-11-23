console.log("main.js loaded");

//
// Create the "Back to Top" button
// learnt from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//
const button = document.createElement("button");
button.innerText = "↑ Top";
button.id = "backToTop";
document.body.appendChild(button);

button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.padding = "25px 15px";
button.style.fontSize = "16px";
button.style.fontFamily = "'Forum', serif";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.background = "#0d0d0c";
button.style.color = "#fff";
button.style.cursor = "pointer";
button.style.display = "none"; // Hidden by default.. and only appears when you scroll
button.style.zIndex = "1000";

// Show the button only when scrolling down
window.addEventListener("scroll", () => {
  button.style.display = window.scrollY > 300 ? "block" : "none";
});

// Smooth scroll to top when clicked
button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


//
// Typewriter Effect ONLY on index.html (homepage)

//
const nameEl = document.querySelector(".intro-text h3");


const isHome =
  window.location.pathname === "/" ||
  window.location.pathname.endsWith("/index.html") ||
  window.location.pathname.endsWith("index.html");

if (isHome && nameEl) {
  const fullText = "Manmeet\u00A0Sagri";
  nameEl.textContent = "";
  let i = 0;

  (function type() {
    if (i < fullText.length) {
      nameEl.textContent += fullText[i];
      i++;
      setTimeout(type, 150);
    }
  })();
}


//
// Simple slideshow for Glazing Guide project slides
// expects images: images/slides1.png ... images/slides21.png
//
const slideImg = document.getElementById("gg-slide-image");

if (slideImg) {
  const totalSlides = 21; // change this if you add/remove slides
  let currentSlide = 1;

  const counterEl = document.getElementById("gg-slide-counter");
  const prevBtn = document.getElementById("gg-slide-prev");
  const nextBtn = document.getElementById("gg-slide-next");

  function updateSlide() {
    slideImg.src = `images/slide${currentSlide}.png`;
    slideImg.alt = `Glazing Guide presentation slide ${currentSlide}`;
    if (counterEl) {
      counterEl.textContent = `Slide ${currentSlide} of ${totalSlides}`;
    }
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1;
    updateSlide();
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
    updateSlide();
  });
}
