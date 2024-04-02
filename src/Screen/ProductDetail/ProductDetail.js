import React, { useState, useEffect } from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import LocationGif from '../../Images/LocationGif.gif'
import { useParams } from 'react-router-dom';
import { getDataid } from '../../Config/FireBase';
import { useSelector } from 'react-redux';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const ProductDetail = () => {
    const [click, setClick] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [apiData, setApiData] = useState([])
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { addId } = useParams();
    const theme = useSelector((state) => state.theme);

    // Provide default values if theme is undefined
    const backgroundColor = theme?.backgroundColor || 'white';
    const textColor = theme?.textColor || 'black';
    // console.log("useparam", addId);
    useEffect(() => {
        productData()
    }, []);

    const handlePreviousImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? apiData.itemPics.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prevIndex => (prevIndex === apiData.itemPics.length - 1 ? 0 : prevIndex + 1));
    };


    const productData = async () => {
        try {
            const product = await getDataid(addId);
            setApiData(product);
        } catch (error) {
            console.error("Error fetching product data:", error);
            // Handle the error (e.g., show an error message to the user)
        }
    };
    console.log('apidata in detail', apiData);

    if (apiData.length <= 0) {
        return (
            <div className="loading-container" style={{ backgroundColor, color: textColor }}>
                <div className="loader"></div>
                <p>Loading...</p>
            </div>
        )
    }


    return (
        <div style={{ backgroundColor, color: textColor }}>
            <div className='container pt-4'>
                <div className='row' style={{ backgroundColor, color: textColor }}>

                    <div className='col-lg-7'>
                        <div className='row'>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1 d-flex justify-content-center align-items-center'>
                                <FaAngleLeft size={30} onClick={handlePreviousImage} />
                            </div>

                            <div className='col-lg-10 col-md-10 col-sm-10 col-9'>
                                {apiData.itemPics && apiData.itemPics.length > 0 && (
                                    <div>
                                        <img
                                            src={apiData.itemPics[currentImageIndex]}
                                            className='img-fluid'
                                            width="100%"
                                            alt={`Image ${currentImageIndex + 1}`}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className='col-lg-1 col-md-1 col-sm-1 col-1 d-flex justify-content-center align-items-center'>
                                <FaAngleRight size={30} onClick={handleNextImage} />
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-5 mt-5'>
                        <div className='card p-4' style={{ backgroundColor, color: textColor }}>
                            <div className='row'>
                                <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                                    <img src='https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png'
                                        className='img-fluid rounded-circle' alt='' />
                                </div>
                                <div className='col-lg-8 col-md-8 col-sm-8 col-8 mt-sm-0 mt-lg-5'>
                                    <h5 className='lh-1 md-pt-5'>{apiData.yourName}</h5>
                                    <p>Upload Post Date : {apiData.postDate}</p>
                                </div>
                            </div>
                            <button className='btn btn-dark' onClick={() => setClick(!click)}>
                                <FaPhone />
                                {click ? (
                                    apiData.yourNumber
                                ) : (
                                    'Click Here To See User Number'
                                )}
                            </button>
                            <button className='btn btn-dark mt-3' onClick={() => setShowEmail(!showEmail)}>
                                <FaMessage />
                                {showEmail ? apiData.yourEmail : 'Click Here To See User Email'}
                            </button>
                        </div>

                        <div className='card p-4 mt-3' style={{ backgroundColor, color: textColor }}>
                            <div className='row' >
                                <div className='col-lg-12'>

                                </div>
                                <div className='col-lg-8 mt-12' >
                                    <h3><img src={LocationGif} alt='img' width="40px" /> Location</h3>
                                    <h4 style={{ fontWeight: "400" }}>{apiData.itemLocation}</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='row mt-3'>

                    <div className='col-lg-12' >
                        <div className='card p-4' style={{ backgroundColor, color: textColor }}>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h3>Details</h3>
                                    <hr />
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 mt-4'>
                                    <p>Name : {apiData.itemName}</p>
                                    {/* <p>Type : {apiData.category}</p> */}
                                    <p>Brand : {apiData.brandName}</p>
                                    <p>Condition : {apiData.itemCondition}</p>
                                    <p>Payment Method : {apiData.paymentMethod}</p>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 mt-4'>
                                    <p>Price : {apiData.itemPrice}</p>
                                    <p>Quantity Avaliable : {apiData.itemQuantity}</p>
                                    <p>Delivery Time : {apiData.deliveryTime}</p>
                                    <p>Shiping : {apiData.shipping}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12 my-3'>
                        <div className='card p-4' style={{ backgroundColor, color: textColor }}>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h3>Description</h3>
                                    <hr />
                                </div>
                                <p>{apiData.itemDes}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetail