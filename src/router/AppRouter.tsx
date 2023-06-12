import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes";
import Layout from "../UI/Layout";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='' element={<Layout/>}>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} Component={route.component}/>
                )}
            </Route>
        </Routes>
    );
};

export default AppRouter;