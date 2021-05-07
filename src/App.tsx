import { FC } from 'react';

import Header from './components/Header';
import NavBar from './components/NavBar';
import NewBlock from './components/NewBlock';
import GenresBlock from './components/GenresBlock';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <NavBar />
      <NewBlock />
      <GenresBlock />
      <Footer />
    </>
  );
}

export default App;