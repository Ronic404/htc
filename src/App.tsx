import { FC } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import MoviesPage from './components/pages/MoviesPage';
import TvPage from './components/pages/TvPage';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/movies" component={MoviesPage} exact />
        <Route path="/tv" component={TvPage} exact />
        <Redirect to="/movies" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;