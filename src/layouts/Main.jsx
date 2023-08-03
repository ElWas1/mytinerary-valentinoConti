import Footer from '../components/Footer/Footer.jsx';
import Navbar from '../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main