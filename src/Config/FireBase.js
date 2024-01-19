import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8QRyMNmA2L6m6UHkpI-QVQL6ogYsCRX0",
  authDomain: "ex-22-olx.firebaseapp.com",
  projectId: "ex-22-olx",
  storageBucket: "ex-22-olx.appspot.com",
  messagingSenderId: "31863403467",
  appId: "1:31863403467:web:ca6a84571b8bed2c367c4e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const SignWithEmailPass = (userIinfo) => {
  const { name, email, password } = userIinfo;
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert('User Register');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorCode} - ${errorMessage}`);
    });
}


const loginWithEmailAndPass = (logEmail,logPassword) => {
  console.log("userIinfo", logEmail,logPassword);
  return signInWithEmailAndPassword(auth, logEmail,logPassword)
    .then(() => {
      alert('User logged in');
    })
    .catch((error) => {
      console.error("Login Error:", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorCode} - ${errorMessage}`);
    });
}




export {
  SignWithEmailPass,
  loginWithEmailAndPass,
}