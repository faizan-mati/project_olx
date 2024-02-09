import React from 'react'
import { useState, useEffect } from 'react';
import sliderImage1 from '../../Images/sliderImage1.jpeg'
// import sliderImage2 from '../../Images/slider2.jpeg'
import sliderImage3 from '../../Images/sliderImage1.jpeg'
import sliderImage2 from '../../Images/sliderImage1.jpeg'
import secondAdd from '../../Images/secondAddImage.png'
import './Slicer.css'

const Slider = () => {
    const images = ["https://static.vecteezy.com/system/resources/thumbnails/002/294/859/small/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg",
        "https://www.shutterstock.com/image-vector/ecommerce-website-banner-template-presents-260nw-2252124451.jpg",
        sliderImage3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the current index, and loop back to 0 if it exceeds the array length
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change the interval time as needed (in milliseconds)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [currentIndex, images.length]);

    return (
        <div>
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <img src={images[currentIndex]} className='img-fluid sliderImage' alt='Slider' />
                    </div>
                    <div className='col-lg-12 text-center'>
                        <br />
                        <img src={secondAdd} className='img-fluid' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider