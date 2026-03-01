import '../scss/main.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Create slide HTML
function createProjectCard({ title, client, description, image, link }) {
  return `
    <div class="swiper-slide">
      <div class="project-card">
        <img src="${image}" alt="${title} screenshot">
        <div class="project-card__info">
          <h4>${client}</h4>
          <p>${description}</p>
          ${link ? `<a href="${link}" target="_blank" class="btn-small">View Project</a>` : ''}
        </div>
      </div>
    </div>
  `;
}

// Project data
const professionalProjects = [
  { 
    title: "Konpsyk", 
    client: "www.konpsyk.dk", 
    description: "Search engine optimisation", 
    image: "src/assets/konpsyk-mobile.webp", 
    link: "https://www.konpsyk.dk" 
  },
  { 
    title: "Demo Slide", 
    client: "Demo", 
    description: "Testing slide", 
    image: "src/assets/konpsyk-mobile.webp", 
    link: "#" 
  },
  { 
    title: "Demo Slide2", 
    client: "Demo2", 
    description: "Testing slide", 
    image: "src/assets/konpsyk-mobile.webp", 
    link: "#" 
  }
];

// Inject slides BEFORE initializing Swiper
const professionalContainer = document.querySelector('.projects__professional .swiper-wrapper');
professionalProjects.forEach(p => {
  professionalContainer.insertAdjacentHTML('beforeend', createProjectCard(p));
});

// Initialize Swiper with required modules
new Swiper('.projects__professional', {
  // Register modules
  modules: [Navigation, Pagination],

  slidesPerView: 1,
  loop: true,
  spaceBetween: 16,

  navigation: {
    nextEl: '.projects__professional .swiper-button-next',
    prevEl: '.projects__professional .swiper-button-prev',
  },

  pagination: {
    el: '.projects__professional .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});