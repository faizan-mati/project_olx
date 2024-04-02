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
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/cartSlice';

const Dashboard = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const navigate = useNavigate()
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);

  // Provide default values if theme is undefined
  const backgroundColor = theme?.backgroundColor || 'white';
  const textColor = theme?.textColor || 'black';

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
      <div className="loading-container" style={{ backgroundColor, color: textColor }}>
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <div style={{ backgroundColor, color: textColor }}>
      <Slider />
      <AllCategories />
      <div className="container my-5">
        <div className="row">

          {apiData.map((item, index) => (
            <div className='card col-lg-4 col-md-6 col-sm-12 col-12 my-3' style={{ backgroundColor, color: textColor }}>
              <div onClick={() => navigate(`/detail/${apiData[index].id}`)} key={index}
                className=''>
                <Prodect name={apiData[index].itemName} price={apiData[index].itemPrice}
                  des={apiData[index].itemDes} image={item.itemPics && item.itemPics.length > 0 ? item.itemPics[0] : ''}
                   postDate={apiData[index].postDate} />
              </div>
              <button className='nav-custom-btn mx-3 my-2' style={{ backgroundColor: theme }} onClick={() => {
                navigate("/purchase")
              }} >Purchase</button>
              <button
                className="nav-custom-btn mx-3 my-2"
                style={{ backgroundColor: theme }}
                onClick={() => dispatch(addToCart(apiData[index]))}
              >
                Add To Cart
              </button>
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


