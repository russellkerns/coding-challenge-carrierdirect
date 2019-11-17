import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
  background-color: red;
  height: 5rem;
  padding: 0.5rem;
`;

const Navbar: React.FC = () => {
  return (
    <StyledNav>
      <h1>Tinycakes, LLC</h1>
    </StyledNav>
  );
};

export default Navbar;
