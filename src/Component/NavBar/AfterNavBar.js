import React from 'react'
import logo from '../../Images/logo.png';
import gifGrocery from '../../Images/gifGrocery.gif';
import gifVagetable from '../../Images/gifVagetable.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MdArrowDropDown } from "react-icons/md";


const AfterNavBar = () => {
    const [isRotated, setIsRotated] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const handleRotationToggle = () => {
        setIsRotated(!isRotated);
        setShowProfile(!isRotated)
    };

    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleSignInClose = () => setShowSignIn(false);
    const handleShowSignIn = () => setShowSignIn(true);

    const handleSignUpClose = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);

    return (
        <div className='bg-light'>

            <div className='container '>
                <div className='row'>
                    <div className='col-lg-1 col-md-3 col-sm-3 col-2' style={{ marginTop: "px", marginLeft: "%" }}>
                        <img src={logo} alt='Logo' height={60} width={60} />
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-3 col-5 ' style={{ marginTop: "20px", fontSize: "12px" }}>
                        <img src={gifGrocery} alt='' height={30} /><span style={{ marginLeft: "5px" }}>GROCERY</span>
                    </div>
                    <div className='col-lg-2 col-md-3 col-sm-3 col-5' style={{ marginTop: "20px", fontSize: "12px" }}>
                        <img src={gifVagetable} alt='' height={30} /><span style={{ marginLeft: "5px" }}>VEGETABLES</span>
                    </div>
                </div>
            </div>


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container'>
                    <img src={logo} alt='Logo' height={75} width={75} className='navbar-brand' />

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className='row w-100'>

                            <div className='col-lg-4'>
                                <select name="" id="" class="form-control">
                                    <option value="1">Select City</option>
                                    <option value="1">Karachi
                                    </option>
                                    <option value="1">Lahore
                                    </option>
                                    <option value="1">Islamabad
                                    </option>
                                </select>
                            </div>
                            <div className='col-lg-8'>
                                <input type='text' className='form-control' placeholder='Enter item' >

                                </input>
                            </div>

                        </div>
                    </div>
                    <div className=''>
                        {/* <button className='nav-custom-btn' variant="primary" onClick={handleShowSignIn}
              style={{ marginRight: "10px" }}>Sign in</button> */}
                        <a href='#' onClick={handleRotationToggle}>
                            <img
                                src='https://cdn3d.iconscout.com/3d/free/thumb/free-instagram-4703914-3915166.png?f=webp'
                                alt='insta'
                                width={40}
                            />
                            <span>
                                <MdArrowDropDown
                                    size="30px"
                                    style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                />
                            </span>
                        </a>
                        <button className='nav-custom-btn' style={{ marginLeft: "20px" }} variant="primary" onClick={handleShowSignUp}>POST ADD</button>
                    </div>
                </div>
            </nav>

            {
                showProfile &&
                <div>
                    <h1>hello</h1>
                </div>
            }


        </div>
    )
}

export default AfterNavBar