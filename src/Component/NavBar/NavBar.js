import React from 'react'
import logo from '../../Images/logo.png';
import gifGrocery from '../../Images/gifGrocery.gif';
import gifVagetable from '../../Images/gifVagetable.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { SignWithEmailPass, loginWithEmailAndPass } from '../../Config/FireBase'

const NavBar = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [logEmail, setLogEmail] = useState();
  const [logPassword, setLogPassword] = useState();

  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClose = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const handleSignUpClose = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const signinbtn = () => {
    SignWithEmailPass({ name, email, password })
  }

  const loginbtn = () => {
    loginWithEmailAndPass( logEmail, logPassword );
    
    // console.log("data checking login", logEmail);
    // console.log("data checking login", logPassword);
  }

  // console.log("data checking", name);
  // console.log("data checking", email);
  // console.log("data checking", password);

  // console.log("data checking login", logEmail);
  // console.log("data checking login", logPassword);

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
            <button className='nav-custom-btn' variant="primary" onClick={handleShowSignIn}
              style={{ marginRight: "10px" }}>Sign in</button>
            <button className='nav-custom-btn' variant="primary" onClick={handleShowSignUp}>Sign up</button>
          </div>
        </div>
      </nav>


      {/* Sign IN */}
      <Modal show={showSignIn} onHide={handleSignInClose}>
        <Modal.Header closeButton>
          <br />
          <br />
          <Modal.Title >REGISTER FORM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3'>
            <br />
            <label className='input-label'>Name</label>
            <input
              className='form-control input-form'
              type='text'
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Your Name'
            />
            <br />
            <label className='input-label'>Email</label>
            <input
              className='form-control input-form'
              onChange={(e) => setEmail(e.target.value)}
              type='text'
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
            <hr />

            <div className='col-lg-12 text-center'>
              <div className='row' >
                <div className='col-lg-4 col-md-3 col-sm-3 col-3'>
                  <a href='#' >
                    <img src='https://cdn3d.iconscout.com/3d/free/thumb/free-instagram-4703914-3915166.png?f=webp' alt='insta'
                      width={50}
                    />
                  </a>
                  <p>Signup with </p>
                </div>
                <div className='col-lg-4 col-md-3 col-sm-3 col-3'>
                  <a href='#' >
                    <img src='https://cdn3d.iconscout.com/3d/free/thumb/free-facebook-4703920-3915172.png?f=webp' alt='insta'
                      width={50}
                    />
                  </a>
                  <p>Signup with </p>

                </div>
                <div className='col-lg-4 col-md-3 col-sm-3 col-3'>
                  <a href='#' >
                    <img src='https://w7.pngwing.com/pngs/873/246/png-transparent-linkedin-social-media-logo-social-media-logo-social-network-3d-icon-thumbnail.png' alt='insta'
                      width={50}
                    />
                  </a>
                  <p>Signup with </p>

                </div>
                {/* <div className='col-lg-4 col-md-3 col-sm-3 col-3'>
                  <a href='#' >
                    <img src='https://ouch-cdn2.icons8.com/_qv0GZ-TvUNz7L6kTDY6jQTK0ZL8PBgeSRketqzOyB0/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEw/LzY2ZThhYzc1LTJh/ZjAtNDk4MC1hNThl/LWMwOWY0NWIyM2Mz/NS5wbmc.png' alt='insta'
                      width={50}
                    />
                  </a>
                  <p>Signup with </p>

                </div> */}
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-primary' onClick={() => signinbtn()}  >
            Submit
          </Button>
          {/* <Button variant="primary" onClick={handleSignInClose}>
            Save changes
          </Button> */}
        </Modal.Footer>
      </Modal>


      {/* Sign UP */}
      <Modal show={showSignUp} onHide={handleSignUpClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN FORM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3'>
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
            <hr />

            <div className='col-lg-12 text-center'>
              <div className='row' >
                <div className='col-lg-4 col-md-3 col-sm-3 col-3'>
                  <a href='https://www.instagram.com/faizan_mati/' >
                    <img src='data:image/jpeg;base64,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
                    ' alt='insta'
                      width={50}
                    />
                  </a>
                  <p>Signup with </p>
                </div>
                <div className='col-lg-4 col-md-3 col-sm-3 col-3'>
                  <a href='https://www.facebook.com/profile.php?id=100079673637881' >
                    <img src='data:image/png;base64,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
                    ' alt='insta'
                      width={50}
                    />
                  </a>
                  <p>Signup with </p>

                </div>
                <div className='col-lg-4 col-md-3 col-sm-3 col-3'>
                  <a href='https://github.com/faizan-mati' >
                    <img src='data:image/png;base64,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
                    ' alt='insta'
                      width={50}
                    />
                  </a>
                  <p>Signup with </p>


                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-primary' onClick={loginbtn}>
            Submit
          </Button>
          {/* <Button variant="primary" onClick={handleSignUpClose}>
            Save changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default NavBar