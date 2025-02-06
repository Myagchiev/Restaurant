// about.js

import peopleImgSrc from '../assets/images/Group 200.png';
import povarSrc from '../assets/images/Group 210.png';
import starFilledSrc from '../assets/images/fi-sr-star.png';

// Функция для создания секции About
export function createAboutSection() {
  const section = document.createElement('section');
  section.id = 'about';

  // Создаем контейнер и блок aboutus
  const container = document.createElement('div');
  container.classList.add('container');
  const aboutus = document.createElement('div');
  aboutus.classList.add('aboutus');

  // Блок для изображения (people)
  const threeDiv = document.createElement('div');
  threeDiv.classList.add('three');
  const imgDiv = document.createElement('div');
  const img = document.createElement('img');
  img.src = peopleImgSrc;
  img.alt = 'photo';
  imgDiv.appendChild(img);
  threeDiv.appendChild(imgDiv);

  // Блок для текста и отзыва (customer feedback)
  const fourDiv = document.createElement('div');
  fourDiv.classList.add('four');
  
  // Заголовки и описание отзыва
  const p = document.createElement('p');
  p.classList.add('redtitle');
  p.textContent = 'TESTIMONIALS';
  
  const h1 = document.createElement('h1');
  h1.textContent = 'What Our Customers Say About Us';
  
  const description = document.createElement('p');
  description.textContent = '“I had the pleasure of dining at Foodi last night, and I\'m still raving about the experience! The attention to detail in presentation and service was impeccable.”';
  
  // Блок с отзывом (имя, картинка, рейтинг)
  const feedbackDiv = document.createElement('div');
  const feedbackImg = document.createElement('img');
  feedbackImg.src = povarSrc;
  feedbackImg.alt = 'image';
  
  const feedbackTextDiv = document.createElement('div');
  const feedbackH2 = document.createElement('h2');
  feedbackH2.textContent = 'Customer Feedback';
  
  const feedbackP = document.createElement('p');
  feedbackP.innerHTML = `<img src="${starFilledSrc}" alt="star"> 4.9 (18.6k Reviews)`;
  
  feedbackTextDiv.appendChild(feedbackH2);
  feedbackTextDiv.appendChild(feedbackP);
  feedbackDiv.appendChild(feedbackImg);
  feedbackDiv.appendChild(feedbackTextDiv);

  // Собираем все элементы в один блок
  fourDiv.appendChild(p);
  fourDiv.appendChild(h1);
  fourDiv.appendChild(description);
  fourDiv.appendChild(feedbackDiv);

  // Добавляем все блоки в контейнер и секцию
  aboutus.appendChild(threeDiv);
  aboutus.appendChild(fourDiv);
  container.appendChild(aboutus);
  section.appendChild(container);

  // Добавляем секцию в body
  document.body.appendChild(section);
}
