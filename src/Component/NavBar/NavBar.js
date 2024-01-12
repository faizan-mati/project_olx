import React from 'react'
import logo from '../../Images/logo.png';
import gifGrocery from '../../Images/gifGrocery.gif';
import gifVagetable from '../../Images/gifVagetable.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { FiSearch } from 'react-icons/fi';


const NavBar = () => {
  return (
    <div className='bg-light'>

      <div className='container '>
        <div className='row'>
          <div className='col-lg-1 col-md-3 col-sm-3 col-3' style={{ marginTop: "px", marginLeft: "%" }}>
            <img src={logo} alt='Logo' height={80} width={80} />
          </div>
          <div className='col-lg-2 col-md-3 col-sm-3 col-4 ' style={{ marginTop: "30px", fontSize: "12px" }}>
            <img src={gifGrocery} alt='' height={30} /><span style={{marginLeft:"5px"}}>GROCERY</span>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-3 col-5' style={{ marginTop: "30px", fontSize: "12px" }}>
            <img src={gifVagetable} alt='' height={30} /><span style={{marginLeft:"5px"}}>VEGETABLES</span>
          </div>
        </div>
      </div>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
          <img src={logo} alt='Logo' height={85} width={85} className='navbar-brand' />

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
          <div className='text-end'>
            <button className='nav-custom-btn'>Register</button>
            <button className='nav-custom-btn' style={{ marginLeft: "15px" }}>Login</button>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default NavBar