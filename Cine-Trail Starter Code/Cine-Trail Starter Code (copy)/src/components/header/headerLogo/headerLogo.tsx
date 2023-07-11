import React from 'react';

import { Link } from 'react-router-dom';

const HeaderLogo: React.FC = () => {
  return (
    <div className="header__logo">
      <Link to="/" className="logo-link">
      <span className="white-text">Cine</span>
      <span className="red-text">Trail</span>
      </Link>
    </div>
  );
};

export default HeaderLogo;
