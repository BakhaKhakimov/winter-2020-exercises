import { Contact } from './contact/contact.js';
import './index.css';
import './index.html';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  const contacts = [
    new Contact('female', 'Patsy Gillan', '334-343-2987'),
    new Contact('female', 'Lucille R. Smith', '517-813-8608'),
  ];

  contacts.forEach(contact => contact.mount(app));
});