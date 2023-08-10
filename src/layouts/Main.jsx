import Footer from '../components/Footer/Footer.jsx';
import Header from '../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const Main = () => {

    const imageClass = 'bg-cover w-screen h-screen brightness-50'

    useEffect(
        () => {
            //get all the imgs in the "slide" div and change to an array of img objects
            let slide = document.getElementById("slide");
            let arr = Array.prototype.slice.call(slide.children);

            //initialize css
            arr.map(function (imgObj) {
                imgObj.classList.add("slide-img");
            });

            //showing the first slide
            arr[0].classList.add("show");

            //initializing values
            let currentSlide = 1;
            let slideLength = slide.children.length;
            let prevSlide = 0;

            //interval function
            setInterval(function () {
                if (currentSlide >= slideLength)
                    currentSlide = 0;

                arr[prevSlide].classList.remove("show");
                arr[currentSlide].classList.add("show");

                prevSlide = currentSlide;
                currentSlide++;

            }, 5000)
        }),
        []

    return (
        <>
            <div id='slide'>
                <img className={imageClass} src="/boat.jpg" alt="Boat" />
                <img className={imageClass} src="/city.jpg" alt="City" />
                <img className={imageClass} src="/lake1.jpg" alt="Lake" />
                <img className={imageClass} src="/mountains.jpg" alt="Mountains" />
                <img className={imageClass} src="/road.jpg" alt="Road" />
                <img className={imageClass} src="/beach.jpg" alt="Beach" />
                <img className={imageClass} src="/city2.jpg" alt="City 2" />
                <img className={imageClass} src="/boat2.jpg" alt="Boat 2" />
                <img className={imageClass} src="/bridge.jpg" alt="Bridge" />
                <img className={imageClass} src="/river2.jpg" alt="River 2" />
                <img className={imageClass} src="/castle.jpg" alt="Castle" />
                <img className={imageClass} src="/lake2.jpg" alt="Lake 2" />
                <img className={imageClass} src="/city3.jpg" alt="City 3" />
                <img className={imageClass} src="/lake3.jpg" alt="Lake 3" />
                <img className={imageClass} src="/mountains2.jpg" alt="Mountains 2" />
                <img className={imageClass} src="/river.jpg" alt="River" />
                <img className={imageClass} src="/snow.jpg" alt="Snow" />
            </div>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main