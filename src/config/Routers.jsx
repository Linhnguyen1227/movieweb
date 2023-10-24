import Catalog from '../pages/Catalog';
import Detail from '../pages/Detail/Detail';
import Home from '../pages/Home';

const PublicRouter = [
    { path: '/', component: Home },
    { path: '/:category/search/:keyword', component: Catalog },
    { path: '/:category/:id', component: Detail },
    { path: '/:category', component: Catalog },
];

export default PublicRouter;
