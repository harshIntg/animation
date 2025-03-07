const customCursors = document.querySelectorAll(".customCursor");
const cursor = document.getElementById("cursor");
const gradientAnime = document.getElementById("gradientAnime");
const scrollAnimations = document.querySelectorAll(".scrollAnimation");
const cursorChild = document.querySelector(".cursorChild");

// Custom cursor -------------
window.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  customCursors.forEach((customCursor, index) => {
    customCursor.style.display = "block";
    customCursor.style.transform = `translate(${x}px,${y}px)`;
    customCursor.style.transition = `${0.15 * index + 0.08}s linear`;
    // increasing the size of the curser when hovering on links ----
    if (e.target.closest(".cursorLink")) {
      cursor.style.width = "200px";
      cursor.style.height = "200px";
      cursor.style.top = "-100px";
      cursor.style.left = "-100px";
      cursorChild.style.display = "none";
    } else {
      cursor.style.width = "30px";
      cursor.style.height = "30px";
      cursor.style.top = "-15px";
      cursor.style.left = "-15px";
      cursorChild.style.display = "block";
    }
  });
});
// To hide the cursor when mouse leaves the page -----
document.addEventListener("mouseleave", () => {
  customCursors.forEach((customCursor) => {
    customCursor.style.display = "none";
  });
});

// Gradient animation on hove -------
gradientAnime.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  gradientAnime.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, white 0%, black 80%)`;
});

// Animating the elements when appear in the viewport -----
function scrollAnimationFnc() {
  scrollAnimations.forEach((scrollAnimation) => {
    const target = scrollAnimation.getBoundingClientRect();
    if (target.top < window.innerHeight) {
      scrollAnimation.style.transform = "translateY(0)";
      scrollAnimation.style.opacity = "100%";
      scrollAnimation.style.transition = "1s";
    } else {
      scrollAnimation.style.transform = "translateY(100%)";
      scrollAnimation.style.opacity = "0";
      scrollAnimation.style.transition = "0";
    }
  });
}

// Calling the function to animate the elements ------
window.addEventListener("scroll", scrollAnimationFnc);
window.addEventListener("load", scrollAnimationFnc);

// Hover animation on contact me -------
const contactTxt = document.getElementById("contactTxt");
function contactTxtFnc() {
  let x = "";
  let y = contactTxt.textContent.trim().split("");
  for (i = 0; i < y.length; i++) {
    if (y[i] === " ") {
      x += `<span class="contactTxtSpace">${y[i]}</span>`;
    } else {
      x += `<span class="contactTxtSpan">${y[i]}</span>`;
    }
  }
  contactTxt.innerHTML = x;
}
contactTxtFnc();

function contactTxtSpanFnc(e) {
  const contactTxtSpans = contactTxt.querySelectorAll(".contactTxtSpan");
  contactTxtSpans.forEach((contactTxtSpan, index) => {
    if (e.target.closest("#contactTxt")) {
      setTimeout(() => {
        contactTxtSpan.style.transform = "scaleY(-1)";
      }, index * 50);
    } else {
      setTimeout(() => {
        contactTxtSpan.style.transform = "scaleY(1)";
      }, index * 50);
    }
  });
}

window.addEventListener("mouseover", contactTxtSpanFnc);

// Typing animation JS---------------
const words = ["Developer", "Designer", "Freelancer", "Coder"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let typingSpeed = 100; // Default speed
  const target = document.getElementById("typed-text");
  const currentWord = words[wordIndex];
  target.textContent = currentWord.slice(0, charIndex);
  if (isDeleting === false) {
    charIndex++; // Type forward
    if (charIndex === currentWord.length + 1) {
      isDeleting = true;
      typingSpeed = 1000; // Pause after typing full word
    }
  } else {
    charIndex--; // Delete backward
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // Loop back to first word
    }
  }
  setTimeout(typeEffect, typingSpeed);
}
typeEffect();
