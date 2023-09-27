import { FC } from 'react';
import Body from './layout/body';
import Navbar from './layout/navbar';
import Home from './pages/home';
import { Storecontext } from "./store/context";
import './style.css';
import { Store } from "./store";

const appStore = {
  store : new Store()
};

export const App: FC<{ name: string }> = ({ name }) => {

  return (
    <Storecontext.Provider value={appStore}>
      <Navbar />
      <Body>
        <Home />
      </Body>
    <Storecontext.Provider/>
  );
};
