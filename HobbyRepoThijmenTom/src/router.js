import { Router } from '@vaadin/router';

const outlet = document.querySelector('#router');
const router = new Router(outlet);

router.setRoutes([
    { path: '/', component: 'home-comp' },
    { path: '/tom', component: 'tom-comp'},
    { path: '/thijmen', component: 'thijmen-comp'},
]);