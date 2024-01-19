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
      <div className="card hover-card">
        <img
          src={props.image}
          className="card-img-top"
          alt="Card Image"
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{truncateDescription(props.name, 30)}</h5>
          <h5 className="card-text">Price: {props.price}Rs</h5>
          <p className="card-text">{truncateDescription(props.des, 150)}</p>
        </div>
        <ul className="list-group list-group-flush d-flex justify-content-between align-items-center">
          <li className="list-group-item">
            <div className='row'>
              <div className='col-lg-10'>
                January 1, 2023
              </div>
              <div className='col-lg-2'>
                <CiHeart style={{ fontSize: '2rem' }} className="heart-icon" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
