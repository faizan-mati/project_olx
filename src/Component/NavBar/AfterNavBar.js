import React, { useEffect, useState } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { getuser, logout } from '../../Config/FireBase';
import logo from '../../Images/logo.png';
import gifGrocery from '../../Images/gifGrocery.gif';
import gifVagetable from '../../Images/gifVagetable.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { getCurrentUserUID } from '../../Config/FireBase';
import { setTheme } from '../../Store/ThemeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaMoon, FaSun } from 'react-icons/fa';
import cart from '../../Images/cart.gif'
import { setToken } from '../../Store/tokenSlice';
import { clearUser } from '../../Store/userSlice';

const AfterNavBar = () => {
    const [isRotated, setIsRotated] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [user, setUser] = useState();
    const [userInformation, setUserInformation] = useState();
    const [currentTheme, setCurrentTheme] = useState('light');

    const uid = getCurrentUserUID();
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items);
    const theme = useSelector((state) => state.theme);

    // Provide default values if theme is undefined
    const backgroundColor = theme?.backgroundColor || 'white';
    const textColor = theme?.textColor || 'black';

    const token = useSelector(state => state.token.token);
    // console.log("token", token);


    const logUser = useSelector((state) => state.user.userInfo);

    useEffect(() => {
        if (token) {
            userInfo(logUser); // Fetch user data only if there is a token
        }
    }, [token]); // Trigger the effect whenever the token changes

    const userInfo = async (logUser) => {
        try {
            // setUserInformation(logUser);

            setUser(logUser.users)
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    // console.log("user navbar", user);

    console.log("userInformation", user);
    // console.log("userInformation", user.fullname);



    const handleRotationToggle = () => {
        setIsRotated((prev) => !prev);
        setShowProfile(!isRotated);
    };
    const toggleTheme = () => {
        if (currentTheme === 'light') {
            dispatch(setTheme({ backgroundColor: '#153032', textColor: 'white' }));
            setCurrentTheme('dark');
        } else {
            dispatch(setTheme({ backgroundColor: 'white', textColor: 'black' }));
            setCurrentTheme('light');
        }
    };

    const logout = () => {
        dispatch(setToken(null)); // Clear the token
        dispatch(clearUser());    // Clear the user info
    };



    // if (user === undefined) {
    //     return (
    //         <div className="loading-container" style={{ backgroundColor, color: textColor }}>
    //             <div className="loader"></div>
    //             <p>Loading...</p>
    //         </div>
    //     );
    // }

    return (
        <div>
            <div style={{ backgroundColor, color: textColor }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-1 col-md-3 col-sm-3 col-2' style={{ marginTop: "px", marginLeft: "%" }}>
                            <a href='/'>
                                <img src={logo} alt='Logo' className='Nav-First-logo' />
                            </a>
                        </div>
                        <div className='col-lg-2 col-md-3 col-sm-3 col-5' style={{ marginTop: "20px", fontSize: "12px" }}>
                            <img src={gifGrocery} alt='' height={30} /><span style={{ marginLeft: "5px" }}>GROCERY</span>
                        </div>
                        <div className='col-lg-2 col-md-3 col-sm-3 col-5' style={{ marginTop: "20px", fontSize: "12px" }}>
                            <img src={gifVagetable} alt='' height={30} /><span style={{ marginLeft: "5px" }}>VEGETABLES</span>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor, color: textColor }}>
                    <div className='container'>
                        <a href='/'>
                            <img src={logo} alt='Logo' className='Nav-Second-logo' />
                        </a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className='row w-100'>
                                <div className='col-lg-4'>
                                    <select name="" id="" className="form-control">
                                        <option value="1">Select City</option>
                                        <option value="1">Karachi</option>
                                        <option value="1">Lahore</option>
                                        <option value="1">Islamabad</option>
                                    </select>
                                </div>
                                <div className='col-lg-8'>
                                    <input type='text' className='form-control' placeholder='Enter item' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <a href='#' onClick={handleRotationToggle}>
                                <img
                                    src={user?.pic}
                                    alt='insta'
                                    width={40}
                                    className='rounded-circle'
                                />
                                <span>
                                    <MdArrowDropDown
                                        size="30px"
                                        style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    />
                                </span>
                            </a>
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
                            <a href='/cart'>
                                {/* <div> */}
                                {currentTheme === 'light' ? (
                                    <>
                                        <img src={cart} alt="cart" width={40} />
                                        {cartItems.length > 0 && <span style={{ backgroundColor: "black", color: "white" }} className='rounded-circle px-2'>{cartItems.length}</span>}
                                    </>
                                ) : (
                                    <>
                                        <img src={cart} alt="cart" width={40} />
                                        {cartItems.length > 0 && <span style={{ backgroundColor: "white", color: "black" }} className='rounded-circle px-2'>{cartItems.length}</span>}
                                    </>
                                )}
                                {/* </div> */}
                            </a>
                            {/* <FaShoppingCart size={24} color="blue" className='mx-2' /> */}
                            <a href='/AddPost'>
                                <button className='nav-custom-btn' style={{ marginLeft: "20px" }} variant="primary">
                                    POST ADD
                                </button>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            {showProfile && (
                <div className='p-3 text-left  custom-card  custom-card-drop '>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                            <img
                                src={user?.pic}
                                alt='pic'
                                width={80}
                                className='rounded-circle'
                            />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6 mt-3'>
                            <span><h5>{user?.fullname}</h5></span>
                            <a href=''>Edit Profile</a>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <a href='/'>
                            <button className='customize-drop-btn'>DashBoard</button>
                        </a>
                    </div>
                    <div>
                        <a href={`/myadd/${user?._id}`}>
                            <button className='customize-drop-btn'>My Add</button>
                        </a>
                    </div>

                    <hr />
                    <button className='nav-custom-btn' variant="primary"
                        onClick={() => logout()}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default AfterNavBar	