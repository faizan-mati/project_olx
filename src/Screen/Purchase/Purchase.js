import React, { useEffect, useState } from 'react'
import { PurchaseData } from '../../Config/FireBase'
import { useSelector } from 'react-redux'

const Purchase = () => {
    const [purName, setPurName] = useState()
    const [purEmail, setPurEmail] = useState()
    const [purNumber, setPurNumber] = useState()
    const [purAddress, setPurAddress] = useState()
    const theme = useSelector((state) => state.theme);

    // Provide default values if theme is undefined
    const backgroundColor = theme?.backgroundColor || 'white';
    const textColor = theme?.textColor || 'black';
    useEffect(() => {
        PurchaseForm()
    }, [])

    const PurchaseForm = () => {
        if (!purName || !purEmail || !purNumber || !purAddress) {
            alert('Please fill in all required fields.');
        }

        PurchaseData({ purName, purEmail, purNumber, purAddress })

        setPurName('');
        setPurEmail('');
        setPurNumber('');
        setPurAddress('');
    }

    return (
        <div style={{ backgroundColor, color: textColor }}>
            <div className='container py-5'>
                <div className='custom-card1 p-4' style={{ backgroundColor, color: textColor }} >
                    <div className='row'>
                        <div className='col-lg-12 text-cente'>
                            <h3>Purchase Item</h3>
                            <hr />
                        </div>
                        <div className='col-lg-12'>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Name</label>
                                <input type="text" className='form-control' name='itemQuantity' value={purName}
                                    onChange={(e) => setPurName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Email</label>
                                <input type="text" className='form-control' name='itemName' value={purEmail}
                                    onChange={(e) => setPurEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 mt-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Number</label>
                                <input type="number" className='form-control' name='brandName' value={purNumber}
                                    onChange={(e) => setPurNumber(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Enter Your Address</label>
                                <input type="text" className='form-control' name='Enter Your Number' value={purAddress}
                                    onChange={(e) => setPurAddress(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Peyment Method</label>
                                <input type="text" className='form-control' name='Enter Your Number' value="Cash On Delivery" readOnly
                                />
                            </div>
                            <div class="mt-5">
                                <button className='nav-custom-btn' onClick={() => PurchaseForm()}>
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