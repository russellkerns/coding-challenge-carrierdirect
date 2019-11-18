import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  background-color: ${props => props.theme.colors.pink};
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

const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors.yellow};
`;

const NavTitle = styled.h1`
  color: ${props => props.theme.colors.yellow};
`;

const Navbar: React.FC = () => {
  return (
    <StyledNav>
      <NavTitle>Tinycakes</NavTitle>
      <LinkDiv>
        <StyledNavLink activeClassName="chosen" exact to="/">
          Home
        </StyledNavLink>
        <StyledNavLink activeClassName="chosen" exact to="/order/history">
          Orders
        </StyledNavLink>
      </LinkDiv>
    </StyledNav>
  );
};

export default Navbar;
