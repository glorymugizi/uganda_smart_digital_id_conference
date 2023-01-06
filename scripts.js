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
];
const secondArray = [
  {
    sName: 'Davin Muruhura',
    sUniversity:
      'Professor of Computer Science & Engineering at the University of Washington',
    sCheckedImg: './images/chess-bg.png',
    sImg: './images/speakers/product-school-DL-yyYDDNX4-unsplash.jpg',
    sBiodata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    sName: 'James Garry',
    sUniversity:
      'Professor of Computer Science & Engineering at the University of Washington',
    sCheckedImg: './images/chess-bg.png',
    sImg: './images/speakers/pexels-igreja-dimensão-10295936.jpg',
    sBiodata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    sName: 'Daniel Matama',
    sUniversity:
      'Professor of Computer Science & Engineering at the University of Washington',
    sCheckedImg: './images/chess-bg.png',
    sImg: './images/speakers/product-school-DL-yyYDDNX4-unsplash.jpg',
    sBiodata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    sName: 'Glory Mugizi',
    sUniversity:
      'Professor of Computer Science & Engineering at the University of Washington',
    sCheckedImg: './images/chess-bg.png',
    sImg: './images/speakers/pexels-pranav-digwal-32976.jpg',
    sBiodata: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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

secondArray.forEach((speaker) => {
  const {
    sName, sUniversity, sCheckedImg, sImg, sBiodata,
  } = speaker;
  featuredSpeakers.innerHTML += `<div class="speakers-two">
  <div>
    <div class="speaker-image">
      <img
        src=${sCheckedImg} class="checked"
      />
      <img
        src=${sImg} class="img-one"
      />
    </div>
  </div>
  <div class="speaker-bio">
    <h6>${sName}</h6>
    <p class="speaker-education">${sUniversity}</p>
    <p>${sBiodata}</p>
  </div>
</div>
`;
});
const more = document.querySelector('.more');
const moreSpeaker = document.querySelector('.speakers-two');
more.addEventListener('click', () => {
  moreSpeaker.style.display = 'flex';
});
