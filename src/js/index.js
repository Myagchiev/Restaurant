// index.js

import '../css/reset.css';
import '../css/style.css';


// Импортируем необходимые функции
import { createHeader, createMain } from './content.js';
import { createMenu, setUpMenu } from './tabs.js';


// Создаем основной контент
createHeader();
createMain();

document.addEventListener('DOMContentLoaded', () => {
  createMenu();  // Создаем меню

  setUpMenu(); // Используем вашу функцию для настройки кликов по пунктам меню
});


