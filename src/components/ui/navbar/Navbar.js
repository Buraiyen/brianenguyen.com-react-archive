import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import NavbarBrand from './NavbarBrand';
import NavbarLinks from './NavbarLinks'
import './Navbar.css';

const Navbar = () => {
  // States
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileButton, setMobileButton] = useState(false);
  const [background, setBackground] = useState(false);
  const [brandSize, setBrandSize] = useState('150px');

  // Functions
  const showMobileView = () => {
    if (window.innerWidth <= 850) {
      setMobileButton(true);
      showBackground();
      setBrandSize('100px');
    } else {
      setMobileButton(false);
      setBrandSize('150px')
    }
  };

  const showMobileMenu = () => {
    if (mobileButton) {
      let show = !mobileMenu;
      setMobileMenu(show);
    }
  };

  const hideMobileMenu = () => {
    setMobileMenu(false);
  };

  const showBackground = () => {
    if (window.scrollY >= 100 || window.innerWidth <= 850) {
      setBackground(true);
    } else setBackground(false);
  };

  const mobileButtonContent = (
    <div className='navbar__toggle-btn' onClick={showMobileMenu}>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
    </div>
  );

  useEffect(() => {
    showMobileView();
  });

  window.addEventListener('resize', showMobileView);
  window.addEventListener('scroll', showBackground);

  return (
    <nav className={background ? 'navbar navbar--scroll' : 'navbar'}>
      <div>
        <NavLink className='navbar__brand' to='/'>
          <NavbarBrand width={brandSize} />
        </NavLink>
      </div>
      {mobileButton && mobileButtonContent}
      <NavbarLinks onMobileChangeHandler={hideMobileMenu} mobileMenu={mobileMenu}/>
    </nav>
  );
};

export default Navbar;