import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, getFirestore, getDocs, doc, getDoc, query, where, deleteDoc, setDoc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8QRyMNmA2L6m6UHkpI-QVQL6ogYsCRX0",
  authDomain: "ex-22-olx.firebaseapp.com",
  projectId: "ex-22-olx",
  storageBucket: "ex-22-olx.appspot.com",
  messagingSenderId: "31863403467",
  appId: "1:31863403467:web:ca6a84571b8bed2c367c4e"
};

// ================= initializeApp =========================

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// ================ Register User =============================

const SignWithEmailPass = async (userInfo) => {
  const { pic } = userInfo;

  try {

    if (!pic || !pic.name) {
      console.error('Invalid itemPic object:', pic);
      throw new Error('Invalid itemPic object');
    }

    const storageRef = ref(storage, `users/${pic.name}`);
    await uploadBytes(storageRef, pic);
    const url = await getDownloadURL(storageRef);

    // await addDoc(collection(db, "users"), {
    //   name,
    //   phone,
    //   pic: url,
    //   uid
    // });

    // alert('Your Account is Registered Now');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Error: ${errorCode} - ${errorMessage}`);
  }
}

// ================ Login User =============================

const loginWithEmailAndPass = (logEmail, logPassword) => {
  console.log("userIinfo", logEmail, logPassword);
  return signInWithEmailAndPassword(auth, logEmail, logPassword)
    .then(() => {
      alert('you are logged in');
    })
    .catch((error) => {
      console.error("Login Error:", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorCode} - ${errorMessage}`);
    });
}

// ================ Add Post =============================

const PostAdd = async (Adds) => {
  try {
    const {
      itemName, brandName, itemCondition, itemPrice, itemQuantity,
      itemLocation, deliveryTime, shipping, paymentMethod,
      itemDes, itemPics, yourEmail, yourName, yourNumber
    } = Adds;

    // Upload images to Firebase Storage
    const uploadFiles = async () => {
      const uploadedImageUrls = [];

      for (let i = 0; i < itemPics.length; i++) {
        const storageRef = ref(storage, `ads/${itemPics[i].name}`);
        const result = await uploadBytes(storageRef, itemPics[i]);
        const url = await getDownloadURL(storageRef);
        uploadedImageUrls.push(url); // Push the uploaded image URL to the array
      }

      return uploadedImageUrls;
    };

    // Call the function to upload files
    const uploadedImageUrls = await uploadFiles();

    // Get the current date
    const currentDate = new Date();

    // Add document to Firestore with multiple image URLs
    await addDoc(collection(db, "ads"), {
      itemName,
      brandName,
      itemCondition,
      itemPrice,
      itemQuantity,
      itemLocation,
      deliveryTime,
      shipping,
      paymentMethod,
      itemDes,
      yourName,
      yourEmail,
      yourNumber,
      itemPics: uploadedImageUrls, // Pass array of image URLs
      postDate: currentDate.toISOString().split('T')[0],
      uid
    });

    alert("Post Add Successfully");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// ================ logout User =============================

const loout = () => {

   localStorage.removeItem('token');
  // signOut(auth).then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });
}

// ================ Show Add =============================

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "ads"));
  const add = []
  querySnapshot.forEach((doc) => {
    const ad = doc.data()
    ad.id = doc.id
    add.push(ad)
  });
  return add
}

// ================ Show Add Detail =============================

const getDataid = async (productId) => {
  const docRef = doc(db, "ads", productId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const ad = docSnap.data();
    ad.id = docSnap.id;
    return ad;
  } else {
    console.error("No such document!");
    return null;
  }
};

// ================ Show My Add =============================

const getMyAdd = async (uid) => {

  try {
    const docRef = query(collection(db, "ads"), where("uid", "==", uid));
    const querySnapshot = await getDocs(docRef);
    let copyData = []

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      data.docid = doc.id
      copyData.push(data)
    });
    return {
      status: 200,
      message: "Success",
      data: copyData
    }
  }
  catch (error) {
    return {
      status: 500,
      message: error.message,
      data: null
    }
  }
};

// ================ Delete Post =============================

const deleteAdvertisement = async (adId) => {
  try {
    const adRef = doc(db, "ads", adId);
    await deleteDoc(adRef);
    console.log("Post successfully deleted!");
    return {
      status: 200,
      message: "Success",
    };
  } catch (error) {
    console.error("Error deleting Post: ", error);
    return {
      status: 500,
      message: error.message,
    };
  }
};

// ================ Show user =============================

const getuser = async (uid) => {

  try {
    const docRef = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(docRef);
    let copyData = []

    querySnapshot.forEach((doc) => {
      const data = doc.data()
      data.docid = doc.id
      copyData.push(data)
      console.log("push add one", copyData)
    });
    return {
      status: 200,
      message: "Success",
      data: copyData
    }
  }
  catch (error) {
    return {
      status: 500,
      message: error.message,
      data: null
    }
  }
}

// ================ Get User Uid =============================

let uid = null;
const getCurrentUserUID = () => {
  const user = auth.currentUser;
  if (user) {
    uid = user.uid;
  } else {
    uid = null;
  }
  return uid;
};


// ================ Update User Data =============================
const updateUserData = async (info) => {
  const { editName, editPhone, editPic, uid } = info;

  try {
    const userQuery = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.docs.length > 0) {
      const userDocRef = doc(db, "users", querySnapshot.docs[0].id);

      // Update name and phone
      await updateDoc(userDocRef, {
        name: editName,
        phone: editPhone,
      });

      // Update profile picture if a new one is provided
      if (editPic) {
        const storage = getStorage();
        const storageRef = ref(storage, `users/${uid}/profile-pic`);
        await uploadBytes(storageRef, editPic);
        const url = await getDownloadURL(storageRef);

        // Update the profile picture URL in Firestore
        await updateDoc(userDocRef, {
          pic: url,
        });
      }

      alert("User data updated successfully");
    } else {
      console.error("No document found for the specified UID:", uid);
    }
  } catch (error) {
    console.error("Error updating user data:", error.message);
  }
};


// ================ purhase form  =============================

const PurchaseData = async (info) => {
  try {
    const { purName, purEmail, purNumber, purAddress } = info

    await addDoc(collection(db, "purchase"), {
      purName,
      purEmail,
      purNumber,
      purAddress,
      uid
    });

    alert("Order Successfully");
  } catch (e) {
    console.error("Error adding document: ", e);
  }

};
// ================ Export =============================

export {
  // SignWithEmailPass,
  loginWithEmailAndPass,
  auth,
  storage,
  PostAdd,
  getData,
  getDataid,
  getuser,
  getCurrentUserUID,
  getMyAdd,
  deleteAdvertisement,
  updateUserData,
  PurchaseData
}