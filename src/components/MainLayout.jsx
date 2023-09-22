import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import {Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;