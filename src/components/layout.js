import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="font-body">
      <main className="max-w-screen-lg m-auto">{children}</main>
      <footer
        style={{
          position: 'absolute',
          bottom: '0px',
          margin: 'auto',
          textAlign: 'center',
          width: '100%',
        }}
      >
        © {new Date().getFullYear()}, Built with &#10084;&#65039;
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
