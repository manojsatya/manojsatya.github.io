import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <header
  // style={{
  //   background: `rebeccapurple`,
  //   marginBottom: `1.45rem`,
  // }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <LinkStyled
          to="/"
          // style={{
          //   color: `black`,
          //   textDecoration: `none`,
          // }}
        >
          Manoj Satyanarayana
        </LinkStyled>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
`;
