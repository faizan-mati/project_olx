import React, { useEffect, useState } from 'react';
import { getCurrentUserUID, getuser, updateUserData } from '../../Config/FireBase';
import { useSelector } from 'react-redux';

const EditProfile = () => {
  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editPic, setEditPic] = useState('');
  const [user, setUser] = useState([]);
  const theme = useSelector((state) => state.theme);

  // Provide default values if theme is undefined
  const backgroundColor = theme?.backgroundColor || 'white';
  const textColor = theme?.textColor || 'black';
  const uid = getCurrentUserUID();

  useEffect(() => {
    userInfo(uid);
  }, [uid]);

  const userInfo = async (uid) => {
    const users = await getuser(uid);
    setUser(users.data[0]);
  };

  const editUser = () => {
    updateUserData({ editName, editPhone, editPic, uid });
  };

  if (user === undefined) {
    return (
      <div className="loading-container"  style={{ backgroundColor, color: textColor }}>
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor, color: textColor }}>
      <div className='container py-5' >
        <div className='custom-card p-4' style={{ backgroundColor, color: textColor }}>
          <div className='row' >
            {/* ... other code ... */}
            <div className='col-lg-6'>
              <div className="mb-3">
                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Update Name</label>
                <input
                  type="text"
                  className='form-control'
                  name='itemName'
                  placeholder={user.name}
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Update Phone Number</label>
                <input
                  type="number"
                  className='form-control'
                  name='itemName'
                  placeholder={user.phone}
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                />
              </div>
            </div>

            <div className='col-lg-6'>
              <div className="mb-3">
                <label className='pb-2' style={{ fontSize: "18px", marginLeft: "10px" }}>Update Profile Pic</label>
                <input
                  type="file"
                  className='form-control'
                  name='itemName'
                  onChange={(e) => setEditPic(e.target.files[0])}
                />
              </div>
              <div class="mt-5">
                <button className='nav-custom-btn' onClick={editUser}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
