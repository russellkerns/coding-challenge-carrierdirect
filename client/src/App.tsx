import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFrostings } from './redux/frostings';
import Frosting from './types/Frosting';
import { fetchToppings } from './redux/toppings';
import { fetchBases } from './redux/bases';
import Navbar from './components/Navbar';
import Root from './components/Root';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFrostings());
    dispatch(fetchToppings());
    dispatch(fetchBases());
  });

  return (
    <>
      <Navbar />
      <Root />
    </>
  );
};

export default App;
