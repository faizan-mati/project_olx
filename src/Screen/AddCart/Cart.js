import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Store/cartSlice';
import Product from '../../Component/ProductCard/Prodect';

const Cart = () => {
  const dispatch = useDispatch(); // Initialize dispatch function
  const items = useSelector(state => state.cart.items);
  const theme = useSelector((state) => state.theme);

  // Provide default values if theme is undefined
  const backgroundColor = theme?.backgroundColor || 'white';
  const textColor = theme?.textColor || 'black';

  const handleRemoveFromCart = (itemId) => {
    // Dispatch the removeFromCart action with the item ID as payload
    dispatch(removeFromCart({ id: itemId }));
  };

  return (
    <div  style={{ backgroundColor, color: textColor }}>
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
              <div className='card col-lg-4 col-md-6 col-sm-12 col-12 m-' key={index} style={{ backgroundColor, color: textColor }}>
                <div>
                  <Product name={items[index].itemName} price={items[index].itemPrice}
                    des={items[index].itemDes} image={items[index].itemPic} postDate={items[index].postDate} />
                </div>
                {/* Pass the item ID to the handleRemoveFromCart function */}
                <button className='nav-custom-btn mx-3 my-2' onClick={() => handleRemoveFromCart(items[index].id)}>Remove</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
