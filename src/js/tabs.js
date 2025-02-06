//tabs.js
import { createAboutSection } from './about.js';
import { createContactSection } from './contact.js';


// функция для переключения секций
export function showSection(targetId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.style.display = 'block';
  }

}

export function setUpMenu() {
  const menuItems = document.querySelectorAll('.navbar ul li');

  menuItems.forEach((item, index) => {
    if (index === 5 || index === 6) {
      return;
    }

    if (index === 0) {
      item.addEventListener('click', () => {
        showSection('home');
      });
      return;
    }

    item.addEventListener('click', (event) => {
      const targetId = event.target.textContent.toLowerCase().replace(/\s+/g, '-');

      if (targetId === 'about-us') {
        const existingAboutSection = document.getElementById('about');
        if (existingAboutSection) {
          existingAboutSection.remove();
        }
        createAboutSection();
        showSection('about');
      } else if (targetId === 'contact-us') {
        const existingContactSection = document.getElementById('contact');
        if (existingContactSection) {
          existingContactSection.remove();
        }
        createContactSection();
        showSection('contact');
      } else {
        showSection(targetId);
      }
    });
  });
}

// класс для создания карточки
class CategoryCard {
  constructor(img, title, desc) {
    this.img = img;
    this.title = title;
    this.desc = desc;
  }

  createCard() {
    const div = document.createElement('div');
    div.classList.add('radius');

    const circle = document.createElement('div');
    circle.classList.add('circle');
    const img = document.createElement('img');
    img.src = this.img;
    img.alt = 'food';
    circle.appendChild(img);
    div.appendChild(circle);

    const h2 = document.createElement('h2');
    h2.textContent = this.title;
    div.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = this.desc;
    div.appendChild(p);

    return div;
  }
}

// класс для создания большой карточки
class ItemCard {
  constructor(heart, img, title, description, price, rating) {
    this.heart = heart;
    this.img = img;
    this.title = title;
    this.description = description;
    this.price = price;
    this.rating = rating;
  }

  createCard() {
    const div = document.createElement('div');
    div.classList.add('radius2');

    const heartDiv = document.createElement('div');
    heartDiv.classList.add('heart');
    heartDiv.innerHTML = this.heart;
    div.appendChild(heartDiv);

    const img = document.createElement('img');
    img.src = this.img;
    img.alt = 'food';
    div.appendChild(img);

    const itemInfo = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = this.title;
    itemInfo.appendChild(h2);

    const pDesc = document.createElement('p');
    pDesc.textContent = this.description;
    itemInfo.appendChild(pDesc);

    const priceRating = document.createElement('div');
    const pPrice = document.createElement('p');
    pPrice.textContent = this.price;
    priceRating.appendChild(pPrice);

    const pRating = document.createElement('p');
    pRating.innerHTML = `<img src="${starFilledSrc}" alt="star"> ${this.rating}`;
    priceRating.appendChild(pRating);

    itemInfo.appendChild(priceRating);
    div.appendChild(itemInfo);

    return div;
  }
}
import starFilledSrc from '../assets/images/fi-sr-star.png';
import foodOne from '../assets/images/pngwing 4.png';
import foodTwo from '../assets/images/pngwing 6.png';
import foodThree from '../assets/images/pngwing 3.png';
import foodFour from '../assets/images/pngwing 7.png';
import foodFive from '../assets/images/Fattoush salad.png';
import foodSix from '../assets/images/Vegetable salad.png';
import foodSeven from '../assets/images/Egg salad.png';

// функция для создания меню
export function createMenu() {
  // Создание секции menu
  const menuSection = document.createElement('section');
  menuSection.id = 'menu';
  menuSection.style.display = 'none';

  const container = document.createElement('div');
  container.classList.add('container');
  menuSection.appendChild(container);

  const parentDiv = document.createElement('div');
  parentDiv.classList.add('parent');
  container.appendChild(parentDiv);

  const div1 = document.createElement('div');
  div1.classList.add('div1');
  parentDiv.appendChild(div1);

  const div1Content = document.createElement('div');
  div1.appendChild(div1Content);
  div1Content.innerHTML = `
      <h1>Popular Categories</h1>
      <p class="redtitle">Customer Favorites</p>
  `;

  const categories = [
    new CategoryCard(`${foodOne}`, 'Main Dish', '(86 dishes)'),
    new CategoryCard(`${foodTwo}`, 'Break Fast', '(12 break fast)'),
    new CategoryCard(`${foodThree}`, 'Dessert', '(48 dessert)'),
    new CategoryCard(`${foodFour}`, 'Browse All', '(255 Items)')
  ];

  categories.forEach(category => {
    parentDiv.appendChild(category.createCard());
  });

  const items = [
    new ItemCard('&#10084;', `${foodFive}`, 'Fattoush salad', 'Description of the item', '$24.00', '4.6'),
    new ItemCard('&#9825;', `${foodSix}`, 'Vegetable salad', 'Description of the item', '$26.00', '4.5'),
    new ItemCard('&#9825;', `${foodSeven}`, 'Egg vegi salad', 'Description of the item', '$23.00', '4.9')
  ];

  items.forEach(item => {
    parentDiv.appendChild(item.createCard());
  });

  document.body.appendChild(menuSection);
}
