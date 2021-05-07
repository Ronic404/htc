import { FC } from 'react';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import NavBar from './components/NavBar';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <NavBar />
    </>
  );
}

export default App;