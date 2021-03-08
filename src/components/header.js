import React from 'react';

const Header = (props) => (
  <div className='header container'>
    <div>
      <h1 className='header__title'>decide</h1>
      <img src="img/logo.png" alt="decide4me logo" />
      <h1 className='header__title'>me</h1>
    </div>
    <div>
      <h1 className='header__title'>{props.title}</h1>
      <h2 className='header__subtitle'>{props.subtitle}</h2>
    </div>
  </div>
);

export default Header;
