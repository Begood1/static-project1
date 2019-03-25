import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import '../stylesheets/style.scss';
import * as config from '../../config/config.json';

const flickity = new Flickity('.gallery', {
  contain: true,
  // More options are available:
  // https://flickity.metafizzy.co/options.html
});

const burger = document.querySelector('button.burger');
const burgerActive = 'burger--morph';
const mobilePanel = document.querySelector('.mobile__panel');
const mobilePanelActive = 'mobile__panel--open';

burger.addEventListener('click', () => {
  burger.classList.toggle(burgerActive);
  mobilePanel.classList.toggle(mobilePanelActive);
});

// import '../stylesheets/style.scss';
// import qs from 'qs';
// import axios from 'axios';
// import * as config from '../../config/config.json';

// const form = document.querySelector('.form');
// const email = document.querySelector('.email');
// const comment = document.querySelector('.comment');
// const name = document.querySelector('.name');

// // ðŸ‘† Write homework code here

// const handleSubmit = e => {
//   e.preventDefault();
//   const formData = {
//     name: name.value,
//     email: email.value,
//     comment: comment.value,
//     priority: document.querySelector('input[name="priority"]:checked').value,
//     topic: [...document.querySelectorAll('input[name="topic"]:checked')].map(v => v.value),
//   };
//   axios
//     .post(config.site.url, qs.stringify({ 'form-name': config.form.name, ...formData }))
//     .then(_ => console.log('success'))
//     .catch(_ => console.log('failed'));
// };

// form.addEventListener('submit', handleSubmit);
