import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import ArtisanProfile from './pages/ArtisanProfile';
import Navbar from './components/Navbar';
import './index.css'; 
import ProductsPage from './pages/ProductsPage';
import EventsPage from './pages/EventsPage';
import ProfilePage from './pages/ProfilePage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';


// import Events from './pages/Events';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/artisans" element={<ArtisanProfile />} />
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
