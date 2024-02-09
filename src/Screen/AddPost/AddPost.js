import React, { useState } from 'react';
import './AddPost.css'
import { PostAdd } from '../../Config/FireBase';
import { useSelector } from 'react-redux';
import MapComponent from './MapComponent';

const AddPost = () => {
    const [itemName, setItemName] = useState('');
    const [brandName, setBrandName] = useState('');
    const [itemCondition, setItemCondition] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemLocation, setItemLocation] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');
    const [shipping, setShipping] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [itemDes, setItemDes] = useState('');
    const [itemPic, setItemPic] = useState(null);
    const [yourEmail, setYourEmail] = useState(null);
    const [yourName, setYourName] = useState(null);
    const [yourNumber, setYourNumber] = useState(null);
    const [mapLocation, setMapLocation] = useState(null);

    const theme = useSelector((state) => state.theme);

    // Provide default values if theme is undefined
    const backgroundColor = theme?.backgroundColor || 'white';
    const textColor = theme?.textColor || 'black';

    const Addsubmit = async () => {
        if (!itemName || !brandName || !itemCondition || !itemPrice || !itemQuantity ||
            !itemLocation || !deliveryTime || !shipping || !paymentMethod || !itemDes || !itemPic ||
            !yourName || !yourEmail || !yourNumber) {
            alert('Please fill in all required fields.');
            return;
        }

        await PostAdd({
            itemName, brandName, itemCondition, itemPrice, itemQuantity,
            itemLocation, deliveryTime, shipping, paymentMethod, itemDes,
            itemPic, yourName, yourEmail, yourNumber
        })

        setItemName('');
        setBrandName('');
        setItemCondition('---');
        setItemPrice('');
        setItemQuantity('');
        setItemLocation('---');
        setDeliveryTime('---');
        setShipping('---');
        setPaymentMethod('---');
        setItemDes('');
        setItemPic(null);
        setYourName('');
        setYourEmail('');
        setYourNumber('');
          }

    return (
        <div style={{ backgroundColor, color: textColor }}>
            <div className='container py-5'>
                <div className='custom-card p-4' style={{ backgroundColor, color: textColor }}>
                    <div className='row' >
                        <div className='col-lg-12 text-cente' >
                            <h3>ADD POST ADD</h3>
                            <hr />
                        </div>
                        <div className='col-lg-6'>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Name</label>
                                <input type="text" className='form-control' name='itemQuantity' value={yourName}
                                    onChange={(e) => setYourName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Item Name</label>
                                <input type="text" className='form-control' name='itemName' value={itemName}
                                    onChange={(e) => setItemName(e.target.value)} />
                            </div>
                            <div className="mb-3 mt-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Brand Name</label>
                                <input type="text" className='form-control' name='brandName' value={brandName}
                                    onChange={(e) => setBrandName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Condition</label>
                                <div class="input-group input-group-merge">
                                    <select name="itemCondition" id="" class="form-control" onChange={(e) => setItemCondition(e.target.value)}>
                                        <option value="">{itemCondition}</option>
                                        <option value="New">New
                                        </option>
                                        <option value="Use">Use
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Number</label>
                                <input type="number" className='form-control' name='Enter Your Number' value={yourNumber}
                                    onChange={(e) => setYourNumber(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Item Price</label>
                                <input type="text" className='form-control' name='itemPrice' value={itemPrice}
                                    onChange={(e) => setItemPrice(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Item Quantity</label>
                                <input type="text" className='form-control' name='itemQuantity' value={itemQuantity}
                                    onChange={(e) => setItemQuantity(e.target.value)} />
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Email</label>
                                <input type="email" className='form-control' name='itemQuantity' value={yourEmail}
                                    onChange={(e) => setYourEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Item Location </label>
                                <div class="input-group input-group-merge">
                                    <select name="itemLocation" id="" class="form-control" onChange={(e) => setItemLocation(e.target.value)}>
                                        <option value="">{itemLocation}</option>
                                        <option value="Lahore">Lahore
                                        </option>
                                        <option value="Karachi">Karachi
                                        </option>
                                        <option value="Faisalabad">Faisalabad
                                        </option>
                                        <option value="Rawalpindi">Rawalpindi
                                        </option>
                                        <option value="Islamabad">Islamabad
                                        </option>
                                        <option value="Multan">Multan
                                        </option>
                                        <option value="Peshawar">Peshawar
                                        </option>
                                        <option value="Quetta">Quetta
                                        </option>
                                        <option value="Sialkot">Sialkot
                                        </option>

                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Delivery Time</label>
                                <div class="input-group input-group-merge">
                                    <select name="deliveryTime" id="" class="form-control" onChange={(e) => setDeliveryTime(e.target.value)}>
                                        <option value="">{deliveryTime}</option>
                                        <option value="1 day to 3 days">1 day to 3 days
                                        </option>
                                        <option value="3 days to 1 week">3 days to 1 week
                                        </option>
                                        <option value="1 week to 2 weeks">1 week to 2 weeks
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Shipping Type</label>
                                <div class="input-group input-group-merge">
                                    <select name="Shipping" id="" class="form-control" onChange={(e) => setShipping(e.target.value)}>
                                        <option value="">{shipping}</option>
                                        <option value="Paid">Paid
                                        </option>
                                        <option value="Free">Free
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Payment Method</label>
                                <div class="input-group input-group-merge">
                                    <select name="peyment" id="" class="form-control" onChange={(e) => setPaymentMethod(e.target.value)}>
                                        <option value="">{paymentMethod}</option>
                                        <option value="Cash On Delivery">Cash On Delivery
                                        </option>
                                        <option value="Online">Online
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Item Picture</label>
                                <input type="file" className='form-control' name='itemPic'
                                    onChange={(e) => setItemPic(e.target.files[0])} />
                            </div>

                        </div>

                        <hr />

                        <div className='col-lg-12'>
                            <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Item Description</label>
                            <br />
                            <textarea
                                className='form-control'
                                id="description"
                                name="description"
                                value={itemDes}
                                onChange={(e) => setItemDes(e.target.value)}
                                rows="4" // You can adjust the number of rows as needed
                            />

                        </div>
                        {/* <div className='col-lg-12'>
                            <MapComponent
                                defaultLocation={{ lat: 0, lng: 0 }}
                                onLocationChange={(location) => setMapLocation(location)} // Update mapLocation state
                            />
                        </div> */}
                        <div class="mt-5">
                            <button className='nav-custom-btn' onClick={() => Addsubmit()}>
                                POST ADD
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AddPost