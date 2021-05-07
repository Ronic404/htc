import { FC } from 'react';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import NavBar from './components/NavBar';
import MoviesBlock from './components/New';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <NavBar />
      <MoviesBlock />
    </>
  );
}

export default App;