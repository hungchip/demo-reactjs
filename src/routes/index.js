import Login from '@/components/Layout/AdminLayout/Login';
import Home from '@/pages/Home';
import Intro from '@/pages/Intro';

const routes = [
  { path: '/', component: Home, isPrivate: false },
  { path: '/intro', component: Intro, isPrivate: false },
  { path: '/login', component: Login, isPrivate: true },
];
export { routes };
