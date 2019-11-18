import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './Layout';
import styled from 'styled-components';

const WelcomeLink = styled(Link)`
  font-size: 2rem;
  color: ${props => props.theme.colors.blue.light};
  font-weight: bold;
  &:hover {
    color: ${props => props.theme.colors.pink};
  }
`;

const Welcome: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome</h1>
      <WelcomeLink to="/order">Click to start an order!</WelcomeLink>
    </Layout>
  );
};

export default Welcome;
