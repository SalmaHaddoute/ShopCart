// App.js
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';           
import Contact from './Contact'; 
import Products from './Products'; 
import Promotions from './Promotions'; 
import Cart from './Cart'; 



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/products" element={<Products />} />
                    <Route exact path="/promotions" element={<Promotions />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


