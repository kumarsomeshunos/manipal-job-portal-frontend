import React from 'react';
import myImg from '../images/muj_name_image (1).jpg';
const Navbar = () => {
  return (
    <div className='navbar-main'>
      <div class='container'>
        <div class='navbar'>
          <img
            class='img_muj_logo'
            src={myImg}
            alt='manipal university jaipur'
          />
          <nav>
            <ul>
              <li>
                <a class='nav_text' href='#'>
                  DEMO
                </a>
              </li>
              <li>
                <a class='nav_text' href='#'>
                  DEMO
                </a>
              </li>
              <li>
                <a class='nav_text' href='#'>
                  DEMO
                </a>
              </li>
              <li>
                <a class='nav_text' href='#'>
                  DEMO
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
