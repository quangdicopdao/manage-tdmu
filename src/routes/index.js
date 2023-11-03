import Home from '~/pages/Home';
import Blogs from '~/pages/Blogs';
import Schedule from '~/pages/Schedule';
const publicRoute = [
    { path: '/', component: Home },
    { path: '/blogs', component: Blogs },
    { path: '/schedule', component: Schedule },
];

const privateRoute = [];
export { publicRoute, privateRoute };
