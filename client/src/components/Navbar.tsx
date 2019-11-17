import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  background-color: red;
  height: 5rem;
  padding: 0 3rem 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkDiv = styled.div`
  display: flex;
  width: 6rem;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Navbar: React.FC = () => {
  return (
    <StyledNav>
      <h1>Tinycakes</h1>
      <LinkDiv>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/order/history">Orders</StyledLink>
      </LinkDiv>
    </StyledNav>
  );
};

export default Navbar;
