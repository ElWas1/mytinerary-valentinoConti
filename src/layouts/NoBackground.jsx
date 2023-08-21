import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';

const NoBackground = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default NoBackground;