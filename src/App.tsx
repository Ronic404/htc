import { FC } from 'react';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  );
}

export default App;