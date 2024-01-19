import Dashboard from './Screen/Dashboard/Dashboard';
import './App.css';
import ProductDetail from './Screen/ProductDetail/ProductDetail';
import Rounter from './Config/Router';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';
import AfterNavBar from './Component/NavBar/AfterNavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Rounter />
      {/* <AfterNavBar /> */}
      <Footer />
    </div>
  );
}

export default App;
