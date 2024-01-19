import React from 'react'
import { useState, useEffect } from 'react';
import sliderImage1 from '../../Images/sliderImage1.jpeg'
// import sliderImage2 from '../../Images/slider2.jpeg'
import sliderImage3 from '../../Images/sliderImage1.jpeg'
import sliderImage2 from '../../Images/sliderImage1.jpeg'
import secondAdd from '../../Images/secondAddImage.png'

const Slider = () => {
    const images = [sliderImage1, sliderImage2, sliderImage3];
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
                        <img src={images[currentIndex]} className='img-fluid' alt='' />
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