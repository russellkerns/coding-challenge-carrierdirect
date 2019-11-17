import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <>
      <h1>Welcome</h1>
      <Link to="/order">Click Me</Link>
    </>
  );
};

export default Welcome;
