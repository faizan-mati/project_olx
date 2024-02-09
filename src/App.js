import './App.css';
import Rounter from './Config/Router';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';
import AfterNavBar from './Component/NavBar/AfterNavBar';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './Config/FireBase'
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './Store';


function App() {

  const [screen, setScreen] = useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setScreen(true)
      } else {
        setScreen(false)
      }
    });
  }, []);
  return (
    <div>
      <Provider store={store}>
        {
          screen ?
            <AfterNavBar />
            :
            <NavBar />
        }
        <Rounter />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
