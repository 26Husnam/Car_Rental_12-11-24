const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__form form", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  interval: 500,
});

// const tabs = document.querySelector(".deals__tabs");

// tabs.addEventListener("click", (e) => {
//   const tabContents = document.querySelectorAll(
//     ".deals__container .tab__content"
//   );
//   Array.from(tabs.children).forEach((item) => {
//     if (item.dataset.id === e.target.dataset.id) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
//   tabContents.forEach((item) => {
//     if (item.id === e.target.dataset.id) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// });

// ScrollReveal().reveal(".choose__image img", {
//   ...scrollRevealOption,
//   origin: "left",
// });
// ScrollReveal().reveal(".choose__content .section__header", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".choose__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".choose__card", {
//   duration: 1000,
//   delay: 1500,
//   interval: 500,
// });

// ScrollReveal().reveal(".subscribe__image img", {
//   ...scrollRevealOption,
//   origin: "right",
// });
// ScrollReveal().reveal(".subscribe__content .section__header", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".subscribe__content .section__description", {
//   ...scrollRevealOption,
//   delay: 1000,
// });
// ScrollReveal().reveal(".subscribe__content form", {
//   ...scrollRevealOption,
//   delay: 1500,
// });

// FAQ functionality
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all items first
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-answer").style.height = "0";
      });

      // Open the clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active");
        answer.style.height = answer.scrollHeight + "px"; // Set height dynamically
      }
    });
  });
});



// Initialize Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});