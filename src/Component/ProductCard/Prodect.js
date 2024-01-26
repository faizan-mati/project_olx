import React from 'react';
import { CiHeart } from 'react-icons/ci';
import './Product.css';

const Product = (props) => {
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div className="container mt-4">
      <div className="card hover-card" style={{height:"470px"}}>
        <img
          src={props.image}
          className="card-img-top"
          alt="Card Image"
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{truncateDescription(props.name, 30)}</h5>
          <p className="card-text">{truncateDescription(props.des, 150)}</p>
          <h5 className="card-text">Price: {props.price} Rs</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">           
                {props.postDate}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
