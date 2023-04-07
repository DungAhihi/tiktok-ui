import routesConfig from '~/config/routes';

// Layout
import { HeaderOnly } from '~/component/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// khi không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

// chỉ khi đăng nhập mới được xem
const privateRoutes = {};

export { publicRoutes, privateRoutes };
