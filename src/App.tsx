import { FC } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import MoviesPage from './components/pages/MoviesPage';
import TvPage from './components/pages/TvPage';
import PopUp from './components/PopUp';
import { IState } from './types/forRedux';
import { connect } from 'react-redux';

interface IAppProps {
  isShowPopUp: boolean;
}

const App: FC<IAppProps> = ({ isShowPopUp }) => {
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
      {isShowPopUp && <PopUp />}
    </BrowserRouter>
  );
}

const mapStateToProps = ({ isShowPopUp }: IState) => {
  return {
    isShowPopUp,
  }
}

export default connect(mapStateToProps, null)(App);