import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import ProductListPage from './Pages/ProductListPage';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import Register from './Pages/Register';



function App() {
  return (
      <Router>
          <div>
              <Navbar />  
              <Routes>  
                  <Route path="/" element={<ProductListPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<Register />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
