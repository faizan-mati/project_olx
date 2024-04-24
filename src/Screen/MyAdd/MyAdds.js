import React, { useEffect, useState } from 'react';
import Prodect from '../../Component/ProductCard/Prodect';
import { getCurrentUserUID, getMyAdd, deleteAdvertisement } from '../../Config/FireBase';
import { useSelector } from 'react-redux';
import noAdds from '../../Images/noAddAvaliable.png'
import { useNavigate, useParams } from 'react-router-dom';

const MyAdds = () => {
  const [user, setUser] = useState([]);
  const uid = getCurrentUserUID();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme);

  // Provide default values if theme is undefined
  const backgroundColor = theme?.backgroundColor || 'white';
  const textColor = theme?.textColor || 'black';

  const { id } = useParams();

  useEffect(() => {
    userInfo(id);
  }, [id]); // Use 'id' instead of 'uid'

  const userInfo = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/product/myadd/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch product details');
      }
      const data = await response.json();
      setUser(data.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  console.log('apidata in detail', user);


  const handleDelete = async (adId) => {
    console.log("adId", adId);
    fetch(`http://localhost:3001/product/delete/${adId}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <div className="container py-5" style={{ backgroundColor, color: textColor }}>
        <div className="row" style={{ backgroundColor, color: textColor }}>
          {user.length === 0 ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <div style={{ textAlign: 'center' }}>
                <h2>No Ads Available</h2>
                <p>Sorry, there are currently no ads to display.</p>
                <p>You can be the first one to post an ad!</p>
              </div>
            </div>
          ) : (
            user.map((item, index) => (
              <div key={index} className='col-lg-4 col-md-6 col-sm-12 col-12 card' style={{ backgroundColor, color: textColor }}>
                <Prodect
                  name={item.itemName}
                  price={item.itemPrice}
                  des={item.itemDes}
                  image={item.itemPics && item.itemPics.length > 0 ? item.itemPics[0] : ''} // Check if item.itemPic is defined before accessing its length
                  postDate={item.postDate}
                />
                <button className='nav-custom-btn mx-3 mt-4' onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAdds;
