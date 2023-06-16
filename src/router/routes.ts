import {IRoute} from "../models/IRoute";
import PostsPage from "../pages/PostsPage";
import AboutPage from "../pages/AboutPage";
import UserPage from "../pages/UserPage";

export const publicRoutes: IRoute[] = [
    {path: '/', component: AboutPage},
    {path: '/posts', component: PostsPage},
    {path: '/:id', component: UserPage},
    {path: '/about', component: AboutPage},
    {path: '/*', component: AboutPage}
];