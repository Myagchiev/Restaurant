// content.js

import logoImgSrc from '../assets/images/Group 21.png';
import icon1Src from '../assets/images/Vector.png';
import icon2Src from '../assets/images/Vector (1).png';
import img1Src from '../assets/images/Group 20.png';
import chiliImgSrc from '../assets/images/Rectangle 24.png';
import spicyImgSrc from '../assets/images/Hot spicy Food 🌶.png';
import minicardImg1Src from '../assets/images/Mask group (1).png';
import minicardImg2Src from '../assets/images/Mask group.png';
import starFilledSrc from '../assets/images/fi-sr-star.png';
import starEmptySrc from '../assets/images/fi-br-star.png';
import playVideo from '../assets/images/Group 22.png';

// В файле, где обрабатывается логика авторизации (например, header.js)
import { showSection } from './tabs.js';  // Путь к файлу, где была определена функция showSection

// Теперь вы можете использовать showSection


// Функция для создания шапки
export function createHeader() {
  const header = document.createElement('header');
    const container = document.createElement('div');
    container.classList.add('container');
    
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    
    const ul = document.createElement('ul');
    
    // Создаём li для логотипа
    const logoLi = document.createElement('li');
    const logoImg = document.createElement('img');
    logoImg.src = logoImgSrc;
    logoImg.alt = 'logo';
    logoLi.appendChild(logoImg);
    logoLi.id = 'home1';
    
    // Создаём остальные li для элементов меню
    const menuItems = ['Home', 'Menu', 'About Us', 'Contact Us'];
    const menuLis = menuItems.map(item => {
      const li = document.createElement('li');
      li.textContent = item;
      return li;
    });
    
    // Иконки и кнопка
    const iconLi1 = document.createElement('li');
    const icon1 = document.createElement('img');
    icon1.src = icon1Src;
    icon1.alt = 'icon';
    iconLi1.appendChild(icon1);
    
    const iconLi2 = document.createElement('li');
    const icon2 = document.createElement('img');
    icon2.src = icon2Src;
    icon2.alt = 'icon';
    iconLi2.appendChild(icon2);
    
    const signUpLi = document.createElement('li');
    const signUpButton = document.createElement('button');
    signUpButton.textContent = 'Log in';
    signUpLi.appendChild(signUpButton);
    
    // Добавляем все элементы в ul
    ul.appendChild(logoLi);  // Логотип первым
    ul.append(...menuLis);   // Меню
    ul.appendChild(iconLi1);
    ul.appendChild(iconLi2);
    ul.appendChild(signUpLi);
    
    navbar.appendChild(ul);
    container.appendChild(navbar);
    header.appendChild(container);
    document.getElementById('content').appendChild(header);

// Модальное окно для логина
const modal = document.createElement('div');
modal.id = 'loginModal';
modal.classList.add('modal');

// Стиль для модального окна сразу видимым
modal.style.display = 'block'; // Показываем модальное окно сразу при загрузке

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

// Убираем кнопку закрытия "×"
const form = document.createElement('form');

const usernameLabel = document.createElement('label');
usernameLabel.textContent = 'Username:';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.name = 'username';
usernameInput.required = true;

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password:';
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.name = 'password';
passwordInput.required = true;

const loginButton = document.createElement('button');
loginButton.type = 'submit';
loginButton.textContent = 'Log in';

form.appendChild(usernameLabel);
form.appendChild(usernameInput);
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(loginButton);

modalContent.appendChild(form);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Блокируем прокрутку страницы при открытом модальном окне
document.body.style.overflow = 'hidden';

// Функция логина
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // В данном случае просто проверка на не пустые значения
  if (username && password) {
    signUpButton.textContent = 'Log out'; // Меняем текст на кнопке
    signUpButton.style.backgroundColor = 'red'; // Меняем цвет кнопки

    // Переходим на главную секцию после логина
    showSection('home');
  }

  // Закрываем модальное окно после успешного логина
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Включаем прокрутку страницы обратно
});

// Обработчик для кнопки "Log out"
signUpButton.addEventListener('click', () => {
  if (signUpButton.textContent === 'Log out') {
    // Когда нажимается "Log out", показываем окно входа снова
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку страницы при открытом окне
    signUpButton.textContent = 'Log in'; // Меняем текст кнопки на "Log in"
    signUpButton.style.backgroundColor = ''; // Сбрасываем цвет кнопки (если нужно)
  }
});



}

// Функция для создания основной секции
export function createMain() {
    const main = document.createElement('main');
  const section = document.createElement('section');
  section.id = 'home';
  
  const container = document.createElement('div');
  container.classList.add('container', 'home');
  
  const one = document.createElement('div');
  one.classList.add('one');
  
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Dive into Delights Of Delectable <span>Food</span>';
  
  const p = document.createElement('p');
  p.textContent = 'Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship';
  
  const ul = document.createElement('ul');
  const orderNowLi = document.createElement('li');
  const orderNowButton = document.createElement('button');
  orderNowButton.textContent = 'Order Now';
  orderNowLi.appendChild(orderNowButton);
  
  const watchVideoLi = document.createElement('li');
  watchVideoLi.textContent = 'Watch Video';
  
  const imgLi = document.createElement('li');
  const img = document.createElement('img');
  img.src = playVideo;
  img.alt = 'icon';
  imgLi.appendChild(img);
  
  ul.appendChild(orderNowLi);
  ul.appendChild(watchVideoLi);
  ul.appendChild(imgLi);
  
  one.appendChild(h1);
  one.appendChild(p);
  one.appendChild(ul);
  
  const two = document.createElement('div');
  two.classList.add('two');
  
  const img1 = document.createElement('img');
  img1.src = img1Src;
  img1.alt = '';
  
  const div = document.createElement('div');
  const chiliImg = document.createElement('img');
  chiliImg.src = chiliImgSrc;
  chiliImg.alt = 'cloud';
  chiliImg.classList.add('chili');
  
  const spicyImg = document.createElement('img');
  spicyImg.src = spicyImgSrc;
  spicyImg.alt = 'text';
  spicyImg.classList.add('spicy');
  
  div.appendChild(chiliImg);
  div.appendChild(spicyImg);
  
  two.appendChild(img1);
  two.appendChild(div);
  
  // Добавление minicard элементов
  function createMinicard(imgSrc, title, [price, starsCount], isSecond = false) {
    const minicard = document.createElement('div');
    minicard.classList.add('minicard');
    
    // Если это вторая карточка, добавляем класс 'second'
    if (isSecond) {
      minicard.classList.add('second');
    }
    
    const img = document.createElement('img');
    img.src = imgSrc; // Изменено
    img.alt = 'image';
    
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = title;
    
    // Создаем 5 звезд
    const starsDiv = document.createElement('div');
    starsDiv.classList.add('starsDiv');
    
    for (let i = 0; i < 5; i++) {
      const starImg = document.createElement('img');
      
      // Заполняем звезды в зависимости от starsCount
      if (i < starsCount) {
        starImg.src = starFilledSrc; // Заполненная звезда
      } else {
        starImg.src = starEmptySrc; // Пустая звезда
      }
      
      starImg.alt = 'star';
      starsDiv.appendChild(starImg);
    }
    
    const priceP = document.createElement('p');
    priceP.textContent = price;
    
    div.appendChild(p);
    div.appendChild(starsDiv);  // Добавляем блок с картинками звезд
    div.appendChild(priceP);
    
    minicard.appendChild(img);
    minicard.appendChild(div);
    
    return minicard;
  }
  
  // Пример добавления minicard
  const minicard1 = createMinicard(minicardImg1Src, 'Spicy noodles', ['$18.00', 5]);
  const minicard2 = createMinicard(minicardImg2Src, 'Vegetarian salad', ['$23.00', 4], true);
  
  // Добавление minicard в контейнер two
  two.appendChild(minicard1);
  two.appendChild(minicard2);
  
  // Добавляем контейнер two в основную секцию
  container.appendChild(one);
  container.appendChild(two);
  section.appendChild(container);
  main.appendChild(section);
  
  // Добавляем основной контент в body
  document.getElementById('content').appendChild(main);
}
