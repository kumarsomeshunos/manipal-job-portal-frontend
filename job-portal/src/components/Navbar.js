import React, { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi';
import myImg from '../images/muj_name_image (1).jpg';
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const handleClick = () => {
    setShowCross(!showCross);
  };
  const useEffect = () => {};
  return (
    <div className='navbar-main'>
      <div class='container2'>
        <div class='navbar-big'>
          <img
            class='img_muj_logo'
            src={myImg}
            alt='manipal university jaipur'
          />
          <nav className='navbar-links'>
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
          <div className='ham-btns'>
            <div className='ham-bars' onClick={handleClick}>
              <div
                className={`bar bar-1 ${showCross ? 'cross-1' : null}`}
              ></div>
              <div
                className={`bar bar-1 ${showCross ? 'cross-2' : null}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
