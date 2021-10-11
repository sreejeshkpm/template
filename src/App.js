import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Search from './Search';




function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
   const [showSearch, setShowSearch] = useState
  (false);
  
  
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
        <Link className="brand" to="/">
           Dish
           </Link>
          
          <a href="/About us">About Us</a>
          <a href="/Diet plans">Diet Plans</a>
          <input
              type="text"
              placeholder="Find your favorite dishes and more.."
            />
        </div>
       
          <div className='search'>
            {showSearch && <Search />}
           <button onClick={() =>
           setShowSearch(!showSearch)
           }
           className='searchButton'
           variant='outlined'>{showSearch ? "Hide" :
           "Search Dates"}
           </button>
          </div>
        <div>
        <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
            )
          <a href="/register">Register</a>
        </div>
        </header>
        <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          
          <Route path="/" component={HomeScreen} exact></Route>
          
         
        </main>
        <footer>
        <div className="heading">
        <p>ADDRESS
        <ul>
          <li>Edible kitchen services,
          Kochin</li>
        </ul>
        </p>
      </div>
      
      <div className="heading">
        <p>PHONE
        
      <ul>    
    <li>0124 398 6371</li>
        </ul>
        </p>
      </div>
     
      
      <div className="heading">
        <p>QUICK LINKS
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li></li>
            </ul>
            </p>
            </div>
        </footer>
        
      </div>
    </BrowserRouter>
  );
}
 

export default App;