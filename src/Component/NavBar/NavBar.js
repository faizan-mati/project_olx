import React, { useEffect, useState } from 'react';
import logo from '../../Images/logo.png';
import gifGrocery from '../../Images/gifGrocery.gif';
import gifVagetable from '../../Images/gifVagetable.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { Button, Modal } from 'react-bootstrap';
import { storage } from '../../Config/FireBase'
import faceBook from '../../Images/FormLinkImage/faceBookIcon.png'
import apple3 from '../../Images/FormLinkImage/apple3.png'
import twitter from '../../Images/FormLinkImage/Twitter.png'
import google from '../../Images/FormLinkImage/googleIcon.png'
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../Store/ThemeSlice';
import { setToken } from '../../Store/tokenSlice';
import { FaMoon, FaSun } from 'react-icons/fa';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { setUser } from '../../Store/userSlice';

const NavBar = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const dispatch = useDispatch()
  const token = useSelector(state => state.token);
  const theme = useSelector((state) => state.theme);

  // Provide default values if theme is undefined
  const backgroundColor = theme?.backgroundColor || 'white';
  const textColor = theme?.textColor || 'black';

  // ============== Register form ==========================

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [pic, setPic] = useState();


  const signinbtn = async () => {
    try {
      if (!pic || !pic.name) {
        console.error('Invalid itemPic object:', pic);
        throw new Error('Invalid itemPic object');
      }

      // Upload image to Firestore Storage
      const storageRef = ref(storage, `users/${pic.name}`);
      await uploadBytes(storageRef, pic);
      const imageUrl = await getDownloadURL(storageRef);
      console.log("imageUrl", imageUrl)
      // Register user with additional information including the image URL
      const response = await fetch('http://localhost:3001/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: name,
          email: email,
          password: password,
          pic: imageUrl, // Include the image URL in the request body
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      alert(data.message);

      // Save token in local storage upon successful registration
      if (data) {
        // localStorage.setItem('token', data.token);
        dispatch(setToken(data.token));
        dispatch(setUser(data));
        console.log("data user", data.users);
        console.log("data", data);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Error: ${error.message}`);
    }
  };

  // ============== login form ==========================
  const [logEmail, setLogEmail] = useState();
  const [logPassword, setLogPassword] = useState();

  const loginbtn = () => {
    fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: logEmail,
        password: logPassword,
      })
    })
      .then(res => res.json())
      .then(res => {
        alert(res.message);
        // Save token in local storage upon successful login
        if (res) {
          dispatch(setToken(res.token));
          dispatch(setUser(res));
          console.log("res", res);
        }
      })
      .catch(error => console.error('Error:', error));
  }
  // ============== form close Open ==========================

  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClose = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const handleSignUpClose = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      dispatch(setTheme({ backgroundColor: '#153032', textColor: 'white' }));
      setCurrentTheme('dark');
    } else {
      dispatch(setTheme({ backgroundColor: 'white', textColor: 'black' }));
      setCurrentTheme('light');
    }
  };

  return (
    <div style={{ backgroundColor, color: textColor }}>

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

      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor, color: textColor }}>
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
          {currentTheme === 'light' ? (
            <FaMoon
              size={30}
              color={currentTheme === 'light' ? 'black' : 'white'}
              onClick={toggleTheme}
              className='mx-2'
            />
          ) : (
            <FaSun
              size={30}
              color='white'
              onClick={toggleTheme}
              className='mx-2'
            />
          )}
          <div className=''>
            <button className='nav-custom-btn' variant="primary" onClick={handleShowSignIn}
              style={{ marginRight: "10px", marginLeft: "10px" }}>REGISTER</button>
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
              type='text' value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Your Name'
            />
            <br />
            <label className='input-label'>Phone Number</label>
            <input
              className='form-control input-form'
              type='number' value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter Your Phone Number'
            />
            <br />
            <label className='input-label'>Email</label>
            <input
              className='form-control input-form'
              onChange={(e) => setEmail(e.target.value)}
              type='email' value={email}
              placeholder='Enter Your Email'
            />
            <br />
            <label className='input-label'>Password</label>
            <input
              className='form-control input-form'
              onChange={(e) => setPassword(e.target.value)}
              type='password' value={password}
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
      <Modal show={showSignUp} onHide={handleSignUpClose}  >
        <Modal.Header closeButton>
          <Modal.Title>LOGIN FORM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center px-5' >
            <p>Welcome back! Log in to your account
              and explore our website's offerings.</p>
          </div>
          <div className='px-3'>
            <br />
            <label className='input-label'>Email</label>
            <input
              className='form-control input-form'
              onChange={(e) => setLogEmail(e.target.value)}
              type='text' value={logEmail}
              placeholder='Enter Your Email'
            />
            <br />
            <label className='input-label'>Password</label>
            <input
              className='form-control input-form'
              onChange={(e) => setLogPassword(e.target.value)}
              type='password' value={logPassword}
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