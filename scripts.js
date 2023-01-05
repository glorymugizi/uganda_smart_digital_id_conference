const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const toggleMenu = document.querySelector('.navbar-toggler-icon');
toggleMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});
window.addEventListener('resize', () => {
  if (window.innerHeight >= 768) {
    mobileMenu.classList.add('hidden');
  }
});

const speakersArray = [
  {
    name: 'Dan Ssekasiko',
    university:
      ' Professor  of Computer Science & Engineering at the University of Washington',
    checkedImg: './images/chess-bg.png',
    img: './images/speakers/pexels-igreja-dimensão-10295936.jpg',
    biodata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Agaba Nelson',
    university:
      'Professor of Computer Science & Engineering at the University of Washington ',
    checkedImg: './images/chess-bg.png',
    img: './images/speakers/pexels-pranav-digwal-32976.jpg',
    biodata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Davin Muruhura',
    university:
      'Professor of Computer Science & Engineering at the University of Washington',
    checkedImg: './images/chess-bg.png',
    img: './images/speakers/product-school-DL-yyYDDNX4-unsplash.jpg',
    biodata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'James Garry',
    university:
      'Professor of Computer Science & Engineering at the University of Washington',
    checkedImg: './images/chess-bg.png',
    img: './images/speakers/pexels-igreja-dimensão-10295936.jpg',
    biodata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Daniel Matama',
    university:
      'Professor of Computer Science & Engineering at the University of Washington',
    checkedImg: './images/chess-bg.png',
    img: './images/speakers/product-school-DL-yyYDDNX4-unsplash.jpg',
    biodata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: 'Glory Mugizi',
    university:
      'Professor of Computer Science & Engineering at the University of Washington',
    checkedImg: './images/chess-bg.png',
    img: './images/speakers/pexels-pranav-digwal-32976.jpg',
    biodata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];
const featuredSpeakers = document.querySelector('.speakers-container');
speakersArray.forEach((speaker) => {
  const {
    name, university, checkedImg, img, biodata,
  } = speaker;
  featuredSpeakers.innerHTML += `<div class="speakers">
  <div>
    <div class="speaker-image">
      <img
        src=${checkedImg} class="checked"
      />
      <img
        src=${img} class="img-one"
      />
    </div>
  </div>
  <div class="speaker-bio">
    <h6>${name}</h6>
    <p class="speaker-education">${university}</p>
    <p>${biodata}</p>
  </div>
</div>
`;
});
