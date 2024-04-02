import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Store/cartSlice';
import Product from '../../Component/ProductCard/Prodect';
import { FaTrash } from 'react-icons/fa';


const Cart = () => {
  const dispatch = useDispatch(); // Initialize dispatch function
  const items = useSelector(state => state.cart.items);
  const theme = useSelector((state) => state.theme);
  console.log("item", items);
  // Provide default values if theme is undefined
  const backgroundColor = theme?.backgroundColor || 'white';
  const textColor = theme?.textColor || 'black';

  const handleRemoveFromCart = (itemId) => {
    // Dispatch the removeFromCart action with the item ID as payload
    dispatch(removeFromCart({ id: itemId }));
  };

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <div className="container py-5">
        <div className="row" >
          {items.length === 0 ? (
            <div className="col-12 text-center" >
              <img src='https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif'
                alt='empty cart' width="40%" />
              <h3>Your cart is empty</h3>
            </div>
          ) : (

            items.map((item, index) => (
              <div className='card col-lg-12 col-md-12 col-sm-12 col-12 mt-2' key={index} style={{ backgroundColor, color: textColor }}>
                <div className='row'>
                  <div className='col-lg-2 col-md-2 col-sm-4 col-12'>
                    <img src={items[index].itemPics && items[index].itemPics.length > 0 ? items[index].itemPics[0] : ''} alt='' className='img-fluid' width="100%" />
                  </div> 
                  <div className='col-lg-3 col-md-3 col-sm-3 col-12'>
                    <h3 className='pt-3'>{items[index].itemName} </h3>
                    <h5 className=''>{items[index].brandName} </h5>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-2 col-12'>
                    <h3 className='pt-5'>{items[index].itemPrice} </h3>
                  </div>
                  <div className='col-lg-1 col-md-1 col-sm-2 col-4' >
                    <input type='number' placeholder='1' className='form-control pt-3' style={{ marginTop: "50%" }} />
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-1 col-8 d-flex justify-content-center align-items-center pt-3'>
                    <a href='' onClick={(e) => { e.preventDefault(); handleRemoveFromCart(items[index].id); }} >
                      <FaTrash size={25} />
                    </a>

                  </div>

                  {/* <Product name={items[index].itemName} price={items[index].itemPrice}
                    des={items[index].itemDes} image={items[index].itemPic} postDate={items[index].postDate} /> */}

                </div>
                {/* Pass the item ID to the handleRemoveFromCart function */}
                {/* <button className='nav-custom-btn mx-3 my-2' onClick={() => handleRemoveFromCart(items[index].id)}>Remove</button> */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
