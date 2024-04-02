import React, { useEffect, useState } from 'react';
import Prodect from '../../Component/ProductCard/Prodect';
import { getCurrentUserUID, getMyAdd, deleteAdvertisement } from '../../Config/FireBase';
import { useSelector } from 'react-redux';
import noAdds from '../../Images/noAddAvaliable.png'
import { useNavigate } from 'react-router-dom';

const MyAdds = () => {
  const [user, setUser] = useState([]);
  const uid = getCurrentUserUID();
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme);

  // Provide default values if theme is undefined
  const backgroundColor = theme?.backgroundColor || 'white';
  const textColor = theme?.textColor || 'black';

  useEffect(() => {
    userInfo(uid);
  }, [uid]);

  const userInfo = async (uid) => {
    const users = await getMyAdd(uid);
    setUser(users.data);
  };

  const handleDelete = async (adId) => {
    const result = await deleteAdvertisement(adId);
    if (result.status === 200) {
      // Refresh the user's advertisement list after deletion
      userInfo(uid);
    } else {
      console.error("Failed to delete advertisement:", result.message);
      // Handle the error as needed
    }
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
                <button className='nav-custom-btn mx-3 mt-4' onClick={() => handleDelete(item.docid)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAdds;
