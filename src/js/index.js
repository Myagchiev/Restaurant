// index.js

import '../css/reset.css';
import '../css/style.css';


import { createHeader, createMain } from './content.js';
import { createMenu, setUpMenu } from './tabs.js';


createHeader();
createMain();

document.addEventListener('DOMContentLoaded', () => {
  createMenu();

  setUpMenu();
});


