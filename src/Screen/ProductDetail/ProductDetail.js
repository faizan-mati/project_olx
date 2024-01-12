import React, { useState, useEffect } from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import LocationGif from '../../Images/LocationGif.gif'
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
    const [apiData, setApiData] = useState([])

    const { addId } = useParams();

   console.log("useparam", addId);
    useEffect(() => {
        productData()
    }, []);

    const productData = () => {
        fetch(`https://fakestoreapi.com/products/${addId}`)
            .then((res) => res.json())
            .then((res) => setApiData(res))
    }
    console.log('apidata in detail',apiData);

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
                        <img src={apiData.image}
                            className='img-fluid' width="70%" height="15%" alt='' />
                    </div>
                    <div className='col-lg-5 mt-5'>
                        <div className='card p-4'>
                            <div className='row'>
                                <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                                    <img src='https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png'
                                        className='img-fluid rounded-circle' alt='' />
                                </div>
                                <div className='col-lg-8 col-md-8 col-sm-8 col-8 mt-sm-0 mt-lg-5'>
                                    <h5 className='lh-1'>faizan mati</h5>
                                    <a href='#' className='lh-1' style={{ color: "black" }} >
                                        Click Here To See Profile</a>
                                </div>
                            </div>
                            <button className='btn btn-dark'><FaPhone /> Show Phone Number</button>
                            <button className='btn btn-dark mt-3'><FaMessage /> Show Email</button>
                        </div>

                        <div className='card p-4 mt-3'>
                            <div className='row'>
                                <div className='col-lg-12'>

                                </div>
                                <div className='col-lg-8 mt-12'>
                                    <h3><img src={LocationGif} alt='img' width="40px" /> Location</h3>
                                    <h4 style={{ fontWeight: "400" }}>kornagi, karachi</h4>
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
                                    <p>Name : {apiData.title}</p>
                                    <p>Type : {apiData.category}</p>
                                    <p>Brand : Denim</p>
                                    <p>Condition : New</p>
                                    <p>Payment Method : Easeypaisa</p>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 mt-4'>
                                    <p>Price : {apiData.price}</p>
                                    <p>Quantity Avaliable : 5</p>
                                    <p>Delivery Time : 3 days</p>
                                    <p>Shiping : Free</p>
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
                                <p>{apiData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDetail