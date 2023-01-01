import React from 'react';
import {Link} from 'react-router-dom';


function header() {
  return (
    <header>
      <div className='logo'>
        <h1> <Link to="/">Chottu ⭐ shop</Link></h1>
      </div>
      <ul>
        <li><Link to="/"><i className="fas fa-shopping-cart"></i>Cart</Link></li>
        <li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
      </ul>
    </header>
  )
}

export default header