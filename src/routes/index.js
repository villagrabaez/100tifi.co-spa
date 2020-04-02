import home from '../pages/home';
import HEADER from '../templates/header';
import character from '../pages/character';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import ERROR404 from '../pages/error404';

const ROUTES = {
  '/': home,
  '/:id': character,
  '/contact': 'contact',
}

const ROUTER = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await HEADER();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = ROUTES[route] ? ROUTES[route] : ERROR404;
  content.innerHTML = await render();
}

export default ROUTER