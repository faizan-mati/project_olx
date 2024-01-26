import React, { useState, useEffect } from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import LocationGif from '../../Images/LocationGif.gif'
import { useParams } from 'react-router-dom';
import { getDataid } from '../../Config/FireBase';


const ProductDetail = () => {
    const [click, setClick] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [apiData, setApiData] = useState([])

    const { addId } = useParams();

    // console.log("useparam", addId);
    useEffect(() => {
        productData()
    }, []);

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
            <div className="loading-container">
                <div className="loader"></div>
                <p>Loading...</p>
            </div>
        )
    }


    return (
        <div>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <img src={apiData.itemPic}
                            className='img-fluid' width="100%" height="" alt='' />
                    </div>
                    <div className='col-lg-5 mt-5'>
                        <div className='card p-4'>
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

                        <div className='card p-4 mt-3'>
                            <div className='row'>
                                <div className='col-lg-12'>

                                </div>
                                <div className='col-lg-8 mt-12'>
                                    <h3><img src={LocationGif} alt='img' width="40px" /> Location</h3>
                                    <h4 style={{ fontWeight: "400" }}>{apiData.itemLocation}</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='row mt-3'>

                    <div className='col-lg-12'>
                        <div className='card p-4'>
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
                        <div className='card p-4'>
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