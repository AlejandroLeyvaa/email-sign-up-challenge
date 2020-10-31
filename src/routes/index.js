import validData from '../components/validData';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const reader = location.hash.slice(1) === '/reader' ? Reader() : null;

let routes = {
  '/confirm': validData
};
console.log('[Reader', reader)

const router = () => {
  let hash = getHash();
  console.log('Hash', hash)
  let route = resolveRoutes(hash);
  let render = routes[route];

  console.log('ASDASDADADSDADDSADA', render);
  return render;
};

window.addEventListener('hashchange', route);

export default router;
