import {IRoute} from "../models/IRoute";
import PostsPage from "../pages/PostsPage";
import AboutPage from "../pages/AboutPage";
import UserPage from "../pages/UserPage";

export const publicRoutes: IRoute[] = [
    {path: '/posts', component: PostsPage},
    {path: '/user/:id', component: UserPage},
    {path: '/about', component: AboutPage},
    {path: '/*', component: AboutPage}
];