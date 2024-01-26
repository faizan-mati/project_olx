import React, { useEffect, useState } from 'react';
import Prodect from '../../Component/ProductCard/Prodect';
import { getCurrentUserUID, getMyAdd, deleteAdvertisement } from '../../Config/FireBase';

const MyAdds = () => {
  const [user, setUser] = useState([]);
  const uid = getCurrentUserUID();

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
    <div className="container my-5">
      <div className="row">
        {user.map((item, index) => (
          <div key={index} className='col-lg-4 col-md-6 col-sm-12 col-12 card'>
            <Prodect
              name={item.itemName}
              price={item.itemPrice}
              des={item.itemDes}
              image={item.itemPic}
              postDate={item.postDate}
            />
            <button className='nav-custom-btn m-3 mt-4' onClick={() => handleDelete(item.docid)}>Delete</button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default MyAdds;
