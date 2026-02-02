/* MOBILE MENU */
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

/* SCROLL FADE */
const animatedItems = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

animatedItems.forEach(el => observer.observe(el));

/* 3D TILT */
const hero = document.querySelector(".hero");
const rings = document.querySelector(".rings");

hero.addEventListener("mousemove", e => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  rings.style.transform = `
    rotateX(${(-y / rect.height) * 10}deg)
    rotateY(${(x / rect.width) * 10}deg)
  `;
});

hero.addEventListener("mouseleave", () => {
  rings.style.transform = "rotateX(0deg) rotateY(0deg)";
});



const stacklyItems = document.querySelectorAll(".animate");

const stacklyObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

stacklyItems.forEach(el => stacklyObserver.observe(el));




document.addEventListener("DOMContentLoaded", function () {

  const revealItems = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  revealItems.forEach(function (item) {
    observer.observe(item);
  });

});



function initStacklyReveal(selector) {
  const items = document.querySelectorAll(selector);
  if (!items.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach(el => observer.observe(el));
}

initStacklyReveal(".animate");



/* FILTER FUNCTION */
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".work-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* LIGHTBOX FUNCTION */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

cards.forEach(card => {
  card.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = card.querySelector("img").src;
  });
});

document.querySelector(".lightbox .close").onclick = () => {
  lightbox.style.display = "none";
};




 const workSection = document.querySelector(".cta-content");

const workObserver = new IntersectionObserver(
  (workEntries) => {
    workEntries.forEach((workItem) => {
      if (workItem.isIntersecting) {
        workItem.target.classList.add("active");
      }
    });
  },
  { threshold: 0.4 }
);

workObserver.observe(workSection);
