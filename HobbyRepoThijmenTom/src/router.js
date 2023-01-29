import { Router } from '@vaadin/router';

const outlet = document.querySelector('#router');
const router = new Router(outlet);

router.setRoutes([
    { path: '/', component: 'home-comp' },
    { path: '/Tom', component: 'tom-comp'},

]);