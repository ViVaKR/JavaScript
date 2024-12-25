import '../scss/styles.scss'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
import Router from './router.js';
import { pages } from './page.js';

const routes = [
    { path: '/', view: pages.homes },
    { path: '/codes', view: pages.codes },
    { path: '/camps', view: pages.camps }
];

window.addEventListener('DOMContentLoaded', () => {
    new Router(routes);
});
