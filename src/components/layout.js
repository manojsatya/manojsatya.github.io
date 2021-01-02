import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import GlobalStyle from '../styles/GlobalStyle';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />

      <main>{children}</main>
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
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const LayoutWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
