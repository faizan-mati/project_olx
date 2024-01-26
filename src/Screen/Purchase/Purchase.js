import React, { useEffect, useState } from 'react'
import { PurchaseData } from '../../Config/FireBase'

const Purchase = () => {
    const [purName, setPurName] = useState()
    const [purEmail, setPurEmail] = useState()
    const [purNumber, setPurNumber] = useState()
    const [purAddress, setPurAddress] = useState()

    useEffect(() => {
        PurchaseForm()
    }, [])

    const PurchaseForm = () => {
        PurchaseData({ purName, purEmail, purNumber, purAddress })
    }

    return (
        <div>
            <div className='container my-5'>
                <div className='custom-card1 p-4' style={{ backgroundColor: "#F8F9FA" }}>
                    <div className='row'>
                        <div className='col-lg-12 text-cente'>
                            <h3>Purchase Item</h3>
                            <hr />
                        </div>
                        <div className='col-lg-12'>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Name</label>
                                <input type="text" className='form-control' name='itemQuantity'
                                    onChange={(e) => setPurName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Email</label>
                                <input type="text" className='form-control' name='itemName'
                                    onChange={(e) => setPurEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-3 mt-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Number</label>
                                <input type="number" className='form-control' name='brandName'
                                    onChange={(e) => setPurNumber(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Address</label>
                                <input type="text" className='form-control' name='Enter Your Number'
                                    onChange={(e) => setPurAddress(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Peyment Method</label>
                                <input type="text" className='form-control' name='Enter Your Number' value="Cash On Delivery" readOnly
                                />
                            </div>

                            <div class="mt-5">
                                <button className='nav-custom-btn'  onClick={()=>PurchaseForm()}>
                                    POST ADD
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase