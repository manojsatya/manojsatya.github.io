import PropTypes from 'prop-types';
import React from 'react';

const Header = () => (
  <header className="bg-indigo-400 w-screen">
    <h1 className="max-w-screen-lg m-auto">Manoj Satyanarayana</h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
