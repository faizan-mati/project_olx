import React from 'react';
import { CiHeart } from 'react-icons/ci';
import './Product.css';
import { useSelector } from 'react-redux';

const Product = (props) => {
  const theme = useSelector((state) => state.theme);

  // Provide default values if theme is undefined
  const backgroundColor = theme?.backgroundColor || 'white';
  const textColor = theme?.textColor || 'black';

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div className="container mt-4">
      <div className="hover-card" style={{ height: "470px", backgroundColor, color: textColor }} >
        <img
          src={props.image}
          className="card-img-top"
          alt="Card Image"
          style={{ height: '250px', width: '100%', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{truncateDescription(props.name, 10)}</h5>
          <p className="card-text">{truncateDescription(props.des, 50)}</p>
          <h5 className="card-text">Price: {props.price} Rs</h5>
          <hr />
          {props.postDate}
          <hr />
        </div>
        {/* <ul className="list-group list-group-flush"> */}
        {/* <li className="list-group-item" style={{ backgroundColor, color: textColor }}>     */}
        {/* </li> */}
        {/* </ul> */}
      </div>
    </div>
  );
};

export default Product;
