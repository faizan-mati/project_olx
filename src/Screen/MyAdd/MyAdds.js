import React, { useEffect, useState } from 'react';
import Prodect from '../../Component/ProductCard/Prodect';
import { getCurrentUserUID, getMyAdd, deleteAdvertisement } from '../../Config/FireBase';
import { useSelector } from 'react-redux';
import noAdds from '../../Images/noAddAvaliable.png'
import { useNavigate } from 'react-router-dom';

const MyAdds = () => {
  const [user, setUser] = useState([]);
  const uid = getCurrentUserUID();
  const navigate = useNavigate()
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
            <div className="col-12 text-center">
              <img src={noAdds}
              alt="no adds" />
              <p>No ads available.</p>
            </div>
          ) : (
            user.map((item, index) => (
              <div key={index} className='col-lg-4 col-md-6 col-sm-12 col-12 card' style={{ backgroundColor, color: textColor }}>
                <Prodect
                  name={item.itemName}
                  price={item.itemPrice}
                  des={item.itemDes}
                  image={item.itemPic}
                  postDate={item.postDate}
                />
                <button className='nav-custom-btn mx-3 mt-4' onClick={() => handleDelete(item.docid)}>Delete</button>
                {/* <button className='nav-custom-btn mx-3 mt-4' onClick={() => navigate("/postedit")}>Edit</button> */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAdds;
