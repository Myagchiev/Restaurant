// contact.js

import smallLogo from '../assets/images/miniLogo.png';
import footerGroup from '../assets/images/footerGroup.png';

// Функция для создания секции Contact
export function createContactSection() {
  // Создаем секцию с id "contact"
  const section = document.createElement('section');
  section.id = 'contact';

  // Создаем контейнер для секции
  const container = document.createElement('div');
  container.classList.add('container');

  // --- Контактная форма ---
  const contactFormDiv = document.createElement('div');
  contactFormDiv.classList.add('contact-form');

  // Заголовок формы
  const formHeading = document.createElement('h2');
  formHeading.textContent = 'Contact Us';
  contactFormDiv.appendChild(formHeading);

  // Создаем форму
  const form = document.createElement('form');
  form.id = 'contact-form';
  form.action = '#';
  form.method = 'POST';
  form.onsubmit = (event) => handleSubmit(event); // Обработчик отправки формы

  // Поле ввода для имени
  const nameDiv = createInputField('Name', 'text', 'name');
  // Поле ввода для email
  const emailDiv = createInputField('Email', 'email', 'email');
  // Поле ввода для телефона
  const phoneDiv = createInputField('Phone', 'tel', 'phone');

  // Кнопка отправки формы
  const submitDiv = document.createElement('div');
  submitDiv.classList.add('form-group');
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'SEND';
  submitDiv.appendChild(submitButton);

  // Добавляем все элементы в форму
  form.appendChild(nameDiv);
  form.appendChild(emailDiv);
  form.appendChild(phoneDiv);
  form.appendChild(submitDiv);

  // Добавляем форму в контейнер
  contactFormDiv.appendChild(form);

  // --- Раздел с местоположением ---
  const locationDiv = document.createElement('div');
  const locationHeading = document.createElement('h2');
  locationHeading.textContent = 'Our Location:';
  locationDiv.appendChild(locationHeading);

  const locationText = document.createElement('p');
  locationText.textContent = '123 Bridge Street, Nowhere Land, LA 12345 United States';
  locationDiv.appendChild(locationText);

  // Вставляем карту (iframe)
  const iframe = document.createElement('iframe');
  iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5804.1881478432415!2d45.676380992311294!3d43.3332204768686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d3d50e715cd3%3A0x6bc77145485ca1f9!2z0KDQtdGB0YLQvtGA0LDQvSAiUGFyYWRpc2Ui!5e0!3m2!1sru!2sru!4v1738763408932!5m2!1sru!2sru";
  iframe.width = "600";
  iframe.height = "450";
  iframe.style.border = "0";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  iframe.referrerpolicy = "no-referrer-when-downgrade";
  locationDiv.appendChild(iframe);

  // --- Футер ---
  const footerDiv = document.createElement('div');
  footerDiv.classList.add('footer');

  // Левая часть футера (с мини-логотипом и текстом)
  const leftboxDiv = createFooterLeftBox();

  // Правая часть футера с полезными ссылками
  const rightboxDiv = createFooterRightBox();

  // Добавляем все части футера в футер
  footerDiv.appendChild(leftboxDiv);
  footerDiv.appendChild(rightboxDiv);

  // --- Сборка страницы ---
  container.appendChild(contactFormDiv);
  container.appendChild(locationDiv);
  container.appendChild(footerDiv);

  // Добавляем контейнер в секцию
  section.appendChild(container);

  // Добавляем секцию на страницу
  document.body.appendChild(section);
}

// Обработчик отправки формы
function handleSubmit(event) {
  event.preventDefault();
  alert("Форма отправлена!");
  document.getElementById("contact-form").reset();
}

// Функция для создания поля ввода (с меткой)
function createInputField(labelText, inputType, inputName) {
  const div = document.createElement('div');
  div.classList.add('form-group');
  
  const label = document.createElement('label');
  label.setAttribute('for', inputName);
  label.textContent = `${labelText}:`;

  const input = document.createElement('input');
  input.type = inputType;
  input.id = inputName;
  input.name = inputName;
  input.required = true;

  div.appendChild(label);
  div.appendChild(input);

  return div;
}

// Функция для создания левой части футера
function createFooterLeftBox() {
  const leftboxDiv = document.createElement('div');
  leftboxDiv.classList.add('leftbox');

  const miniLogo = document.createElement('img');
  miniLogo.src = smallLogo;
  miniLogo.alt = 'minilogo';
  leftboxDiv.appendChild(miniLogo);

  const descriptionText = document.createElement('p');
  descriptionText.textContent = 'Savor the artistry where every dish is a culinary masterpiece';
  leftboxDiv.appendChild(descriptionText);

  const footerIcons = document.createElement('img');
  footerIcons.src = footerGroup;
  footerIcons.alt = 'icons';
  leftboxDiv.appendChild(footerIcons);

  return leftboxDiv;
}

// Функция для создания правой части футера
function createFooterRightBox() {
  const rightboxDiv = document.createElement('div');
  rightboxDiv.classList.add('rightbox');

  // Ссылки в футере
  const usefulLinksUl = createFooterList(['About us', 'Blogs', 'FAQ'], 'Useful links');
  const mainMenuUl = createFooterList(['Home', 'Offers', 'Reservation'], 'Main Menu');
  const contactUsUl = createFooterList(['example@email.com', '+64 958 248 966', 'Social media'], 'Contact Us');

  rightboxDiv.appendChild(usefulLinksUl);
  rightboxDiv.appendChild(mainMenuUl);
  rightboxDiv.appendChild(contactUsUl);

  const footerText = document.createElement('p');
  footerText.textContent = 'Copyright &copy; 2023 Dscode | All rights reserved';
  rightboxDiv.appendChild(footerText);

  return rightboxDiv;
}

// Функция для создания списка с заголовком
function createFooterList(items, heading) {
  const ul = document.createElement('ul');
  ul.innerHTML = `<li><h2>${heading}</h2></li>`;
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}
