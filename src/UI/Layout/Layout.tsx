import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div style={{paddingBottom: 10}}>Layout</div>
            <Outlet/>
        </>
    );
};

export default Layout;