import { FC } from 'react';
import Body from './layout/body';
import Navbar from './layout/navbar';
import Home from './pages/home';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <Navbar />
      <Body>
        <Home />
      </Body>
    </>
  );
};
