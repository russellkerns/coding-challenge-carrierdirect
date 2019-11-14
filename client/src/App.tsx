import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFrostings } from './redux/frostings';
import Frosting from './types/Frosting';
import { fetchToppings } from './redux/toppings';
import { fetchBases } from './redux/bases';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const frostings = useSelector((state: any) => state.frostings);
  const toppings = useSelector((state: any) => state.toppings);
  const bases = useSelector((state: any) => state.bases);

  useEffect(() => {
    dispatch(fetchFrostings());
    dispatch(fetchToppings());
    dispatch(fetchBases());
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {!frostings.length ? <h1>Loading....</h1> : null}
      </header>
    </div>
  );
};

export default App;
