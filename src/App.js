import './App.css';
import Router from './Config/Router';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';
import AfterNavBar from './Component/NavBar/AfterNavBar';
import { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './Store';

function App() {
  const [screen, setScreen] = useState(false);
  
  // Retrieve token from Redux store state
  const token = useSelector(state => state.token.token);
  // console.log("user save info login",userInfo);
  // console.log("user token",token);
  useEffect(() => {
    // Check if token exists
    if (token) {
      setScreen(true); // Set screen to true if token exists
    } else {
      setScreen(false); // Set screen to false if token doesn't exist
    }
  }, [token]); // Re-run effect whenever token changes

  return (
    <div>
      <Provider store={store}>
        {screen ? <AfterNavBar /> : <NavBar />}
        <Router />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
