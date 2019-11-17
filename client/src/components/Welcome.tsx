import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './Layout';

const Welcome: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome</h1>
      <Link to="/order">Start an order!</Link>
    </Layout>
  );
};

export default Welcome;
