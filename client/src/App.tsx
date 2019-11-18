import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchFrostings } from './redux/frostings';
import { fetchToppings } from './redux/toppings';
import { fetchBases } from './redux/bases';
import { fetchOrders } from './redux/orders';
import Navbar from './components/Navbar';
import Root from './components/Root';
import { Layout } from './components/Layout';
import { ThemeProvider } from 'styled-components';
import Theme from './utils/Theme';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFrostings());
    dispatch(fetchToppings());
    dispatch(fetchBases());
    dispatch(fetchOrders());
  });

  return (
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Layout>
        <Root />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
