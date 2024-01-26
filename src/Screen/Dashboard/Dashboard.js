import React, { useEffect, useState } from 'react';
import ProdectDetail from '../../Screen/ProductDetail/ProductDetail'
import NavBar from '../../Component/NavBar/NavBar';
import Slider from '../../Component/Slider/Slider';
import AllCategories from '../../Component/AllCategories/AllCategories';
import Prodect from '../../Component/ProductCard/Prodect';
import './Dashboard.css';
import Footer from '../../Component/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import secondAdd from '../../Images/secondAddImage.png'
import { getData } from '../../Config/FireBase';


const Dashboard = () => {

  const navigate = useNavigate()

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    productData()
  }, []);


  const productData = async () => {
    // fetch('https://fakest  oreapi.com/products')
    //   .then((res) => res.json())
    //   .then((res) => setApiData(res))
    const Adds = await getData()
    // console.log("getData", Adds)
    setApiData(Adds)
  }

  // console.log('apiData', apiData[0].itemPic)

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
      <Slider />
      <AllCategories />
      <div className="container my-5">
        <div className="row">

          {apiData.map((item, index) => (
            <div className='card col-lg-4 col-md-6 col-sm-12 col-12'>
              <div onClick={() => navigate(`/detail/${apiData[index].id}`)} key={index}
                className=''>
                <Prodect name={apiData[index].itemName} price={apiData[index].itemPrice}
                  des={apiData[index].itemDes} image={apiData[index].itemPic} postDate={apiData[index].postDate} />
              </div>
              <button className='nav-custom-btn mx-3 my-2' onClick={() => {
                navigate("/purchase")
              }} >Purchase</button>
            </div>
          ))}
        </div>
        <div className='col-lg-12 text-center'>
          <br />
          <img src={secondAdd} className='img-fluid' alt='' />
        </div>
      </div>
      <hr style={{ marginBottom: "-2px" }} />
    </div>
  );
}

export default Dashboard;
