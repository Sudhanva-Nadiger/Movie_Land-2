
import React from 'react';
import './footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <p>Movie App</p>
      <p>Copyright &#169; {year}</p>
    </div>
  )
}

export default Footer