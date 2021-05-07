import { FC } from 'react';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import NavBar from './components/NavBar';
import NewBlock from './components/NewBlock';
import GenresBlock from './components/GenresBlock';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <NavBar />
      <NewBlock />
      <GenresBlock />
    </>
  );
}

export default App;