import React from 'react'
import logo from '../../Images/logo.png';
import gifGrocery from '../../Images/gifGrocery.gif';
import gifVagetable from '../../Images/gifVagetable.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { SignWithEmailPass, loginWithEmailAndPass } from '../../Config/FireBase'
import faceBook from '../../Images/FormLinkImage/faceBookIcon.png'
import apple3 from '../../Images/FormLinkImage/apple3.png'
import twitter from '../../Images/FormLinkImage/Twitter.png'
import google from '../../Images/FormLinkImage/googleIcon.png'

const NavBar = () => {

  // ============== Register form ==========================

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [pic, setPic] = useState();

  const signinbtn = () => {
    SignWithEmailPass({ name, phone, email, pic, password })
  }


  // ============== login form ==========================
  const [logEmail, setLogEmail] = useState();
  const [logPassword, setLogPassword] = useState();

  const loginbtn = () => {
    loginWithEmailAndPass(logEmail, logPassword);
  }


  // ============== form close Open ==========================

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
            <a href='/'>
              <img src={logo} alt='Logo' className='Nav-First-logo' />
            </a>
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
          <a href='/'>
            <img src={logo} alt='Logo' className='Nav-Second-logo' />
          </a>
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
            <button className='nav-custom-btn' variant="primary" onClick={handleShowSignIn}
              style={{ marginRight: "10px" }}>REGISTER</button>
            <button className='nav-custom-btn' variant="primary" onClick={handleShowSignUp}>LOGIN</button>
          </div>
        </div>
      </nav>


      {/*======================== REGISTER ======================= */}
      <Modal show={showSignIn} onHide={handleSignInClose}>
        <Modal.Header closeButton>
          <br />
          <br />
          <Modal.Title >REGISTER FORM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center px-5'>
            <p>Effortlessly join our community by completing
              our user-friendly registration process on our website</p>
          </div>
          <div className='px-3'>
            <br />
            <label className='input-label'>Name</label>
            <input
              className='form-control input-form'
              type='text'
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Your Name'
            />
            <br />
            <label className='input-label'>Phone Number</label>
            <input
              className='form-control input-form'
              type='number'
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter Your Phone Number'
            />
            <br />
            <label className='input-label'>Email</label>
            <input
              className='form-control input-form'
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Enter Your Email'
            />
            <br />
            <label className='input-label'>Password</label>
            <input
              className='form-control input-form'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Enter Your Password'
            />
            <br />
            <label className='input-label'>Picture</label>
            <input
              className='form-control input-form'
              onChange={(e) => setPic(e.target.files[0])}
              type='file'
              placeholder='Enter Your Password'
            />
            <Button className='formRegisterBtn' onClick={() => signinbtn()}  >
              REGISTER
            </Button>
            <hr />

            <div className='col-lg-12 text-center'>
              <h5>Continue With</h5>
              <div className='row' >
                <div className='col-lg-2 col-md-3 col-sm-3 col-3'>

                </div>
                <div className="social-icon-circle">
                  <a href='#'>
                    <img src={google} className="social-icon" />
                  </a>
                </div>
                <div className="social-icon-circle">
                  <a href='#'>
                    <img src={faceBook} className="social-icon" />
                  </a>
                </div>
                <div className="social-icon-circle">
                  <a href='#'>
                    <img src={twitter} className="social-icon" />
                  </a>
                </div>
                <div className="social-icon-circle">
                  <a href='#'>
                    <img src={apple3} className="social-icon" />
                  </a>
                </div>

                <div className='col-lg-2 col-md-3 col-sm-3 col-3'>

                </div>
              </div>
            </div>

          </div>

        </Modal.Body>

      </Modal>


      {/*======================== LOG IN ======================= */}
      <Modal show={showSignUp} onHide={handleSignUpClose} >
        <Modal.Header closeButton>
          <Modal.Title>LOGIN FORM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center px-5'>
            <p>Welcome back! Log in to your account
              and explore our website's offerings.</p>
          </div>
          <div className='px-3'>
            <br />
            <label className='input-label'>Email</label>
            <input
              className='form-control input-form'
              onChange={(e) => setLogEmail(e.target.value)}
              type='text'
              placeholder='Enter Your Email'
            />
            <br />
            <label className='input-label'>Password</label>
            <input
              className='form-control input-form'
              onChange={(e) => setLogPassword(e.target.value)}
              type='password'
              placeholder='Enter Your Password'
            />
            <br />
            <Button className='formLoginBtn' onClick={loginbtn}>
              LOGIN
            </Button>
            <hr />

            <div className='col-lg-12 text-center'>
              <h5>Continue With</h5>
              <div className='row' >
                <div className='col-lg-2 col-md-3 col-sm-3 col-3'>

                </div>
                <div className="social-icon-circle">
                  <a href='#'>
                    <img src={google} className="social-icon" />
                  </a>
                </div>
                <div className="social-icon-circle">
                  <a href='#'>
                    <img src={faceBook} className="social-icon" />
                  </a>
                </div>
                <div className="social-icon-circle">
                  <a href='#'>
                    <img src={twitter} className="social-icon" />
                  </a>
                </div>
                <div className="social-icon-circle">
                  <a href='#'>
                    <img src={apple3} className="social-icon" />
                  </a>
                </div>

                <div className='col-lg-2 col-md-3 col-sm-3 col-3'>

                </div>
              </div>
            </div>

          </div>
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default NavBar