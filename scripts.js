"use strict";
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const toggleMenu = document.querySelector(".navbar-toggler-icon");
const footer = document.querySelector(".footer");
const more = document.querySelector(".more");
const readMore = document.querySelector(".read-more");

toggleMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
});
closeBtn.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
});
window.addEventListener("resize", function () {
  if (window.innerHeight >= 768) {
    mobileMenu.classList.add("hidden");
  }
});
more.addEventListener("click", function () {
  footer.classList.remove("hidden");
  moreMore.classList.add("hidden");
});
let speakersArray = [
  {
    name: "Name",
    university: "University",
    img: "./images/speakers/pexels-igreja-dimensão-10295936.jpg",
    biodata: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Name",
    university: "University",
    img: "./images/speakers/pexels-pranav-digwal-32976.jpg",
    biodata: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Name",
    university: "University",
    img: "/images/speakers/product-school-DL-yyYDDNX4-unsplash.jpg",
    biodata: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Name",
    university: "University",
    img: "./images/speakers/pexels-igreja-dimensão-10295936.jpg",
    biodata: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Name",
    university: "University",
    img: "./images/speakers/product-school-DL-yyYDDNX4-unsplash.jpg",
    biodata: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Name",
    university: "University",
    img: "./images/speakers/pexels-pranav-digwal-32976.jpg",
    biodata: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
const featuredSpeakers = document.querySelector(".speakers-container");
speakersArray.forEach((speaker) => {
  const { name, university, img, detail, biodata } = speaker;
  featuredSpeakers.innerHTML += `<div class="speakers">
  <div>
    <div class="speaker-image">
      <img
        src=${img}
      />
    </div>
  </div>
  <div class="speaker-bio">
    <h6>${name}</h6>
    <p class="speaker-education">${university}</p>
    <p>biodata</p>
  </div>
</div>
`;
});
