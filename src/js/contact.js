// contact.js

import smallLogo from '../assets/images/miniLogo.png';
import footerGroup from '../assets/images/footerGroup.png';


export function createContactSection() {
    const section = document.createElement('section');
    section.id = 'contact';

    const container = document.createElement('div');
    container.classList.add('container');

    // Contact form
    const contactFormDiv = document.createElement('div');
    contactFormDiv.classList.add('contact-form');

    const formHeading = document.createElement('h2');
    formHeading.textContent = 'Contact Us';
    contactFormDiv.appendChild(formHeading);

    const form = document.createElement('form');
    form.id = 'contact-form';
    form.action = '#';
    form.method = 'POST';
    form.onsubmit = (event) => handleSubmit(event); // Обработчик отправки формы

    // Name input
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('form-group');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    // Email input
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('form-group');
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    // Phone input
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('form-group');
    const phoneLabel = document.createElement('label');
    phoneLabel.setAttribute('for', 'phone');
    phoneLabel.textContent = 'Phone:';
    const phoneInput = document.createElement('input');
    phoneInput.type = 'tel';
    phoneInput.id = 'phone';
    phoneInput.name = 'phone';
    phoneInput.required = true;
    phoneDiv.appendChild(phoneLabel);
    phoneDiv.appendChild(phoneInput);

    // Submit button
    const submitDiv = document.createElement('div');
    submitDiv.classList.add('form-group');
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'SEND';
    submitDiv.appendChild(submitButton);

    // Append inputs to the form
    form.appendChild(nameDiv);
    form.appendChild(emailDiv);
    form.appendChild(phoneDiv);
    form.appendChild(submitDiv);

    // Add the form to the contact-form div
    contactFormDiv.appendChild(form);

    // Location
    const locationDiv = document.createElement('div');
    const locationHeading = document.createElement('h2');
    locationHeading.textContent = 'Our Location:';
    locationDiv.appendChild(locationHeading);

    const locationText = document.createElement('p');
    locationText.textContent = '123 Bridge Street, Nowhere Land, LA 12345 United States';
    locationDiv.appendChild(locationText);

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5804.1881478432415!2d45.676380992311294!3d43.3332204768686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4051d3d50e715cd3%3A0x6bc77145485ca1f9!2z0KDQtdGB0YLQvtGA0LDQvSAiUGFyYWRpc2Ui!5e0!3m2!1sru!2sru!4v1738763408932!5m2!1sru!2sru";
    iframe.width = "600";
    iframe.height = "450";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerpolicy = "no-referrer-when-downgrade";
    locationDiv.appendChild(iframe);

    // Footer
    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footer');

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

    const rightboxDiv = document.createElement('div');
    rightboxDiv.classList.add('rightbox');

    const usefulLinksUl = document.createElement('ul');
    usefulLinksUl.innerHTML = `
        <li><h2>Useful links</h2></li>
        <li>About us</li>
        <li>Blogs</li>
        <li>FAQ</li>
    `;
    const mainMenuUl = document.createElement('ul');
    mainMenuUl.innerHTML = `
        <li><h2>Main Menu</h2></li>
        <li>Home</li>
        <li>Offers</li>
        <li>Reservation</li>
    `;
    const contactUsUl = document.createElement('ul');
    contactUsUl.innerHTML = `
        <li><h2>Contact Us</h2></li>
        <li>example@email.com</li>
        <li>+64 958 248 966</li>
        <li>Social media</li>
    `;
    rightboxDiv.appendChild(usefulLinksUl);
    rightboxDiv.appendChild(mainMenuUl);
    rightboxDiv.appendChild(contactUsUl);

    const footerText = document.createElement('p');
    footerText.textContent = 'Copyright &copy; 2023 Dscode | All rights reserved';
    rightboxDiv.appendChild(footerText);

    footerDiv.appendChild(leftboxDiv);
    footerDiv.appendChild(rightboxDiv);

    // Append everything to the container
    container.appendChild(contactFormDiv);
    container.appendChild(locationDiv);
    container.appendChild(footerDiv);

    // Append the container to the section
    section.appendChild(container);

    // Append the section to the body (или другой контейнер на странице)
    document.body.appendChild(section);
}


function handleSubmit(event) {
    event.preventDefault();
    alert("Форма отправлена!");
    document.getElementById("contact-form").reset();
}