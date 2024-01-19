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


const Dashboard = () => {

  const navigate = useNavigate()

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    productData()
  }, []);

  const productData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => setApiData(res))
  }

  // console.log('apiData', apiData)

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
            // const {id , title , price , description , image} = item
            <div onClick={() => navigate(`/detail/${apiData[index].id}`)} key={index}
              className='col-lg-4 col-md-6 col-sm-12 col-12'>
              <Prodect id={apiData[index].id} name={apiData[index].title} price={apiData[index].price}
                des={apiData[index].description} image={apiData[index].image} />
            </div>
          ))}
        </div>
        <div className='col-lg-12 text-center'>
          <br />
          <img src={secondAdd} className='img-fluid' alt='' />
        </div>
      </div>
      <hr style={{marginBottom:"-2px"}} />
    </div>
  );
}

export default Dashboard;
