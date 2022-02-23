import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Cart from './components/Cart';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {

return (



<Router>

  <NavBar />
  <Cart/>
  
  <Footer/>
  
</Router>




  );
}



export default App;
