import { Dispatch, FC } from 'react';
import { connect } from 'react-redux';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MoviesPage from './components/pages/MoviesPage';
import TvPage from './components/pages/TvPage';
import PopUp from './components/PopUp';

import { IActions, IState } from './types/forRedux';
import { logInAction } from './store/actions';

interface IAppProps {
  isShowPopUp: boolean;
  logInAction: () => void;
}

const App: FC<IAppProps> = ({ isShowPopUp, logInAction }) => {
  const isAuth = localStorage.getItem('isAuth');

  if (isAuth) {
    logInAction();
  }

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

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => {
  return {
    logInAction: (): void => {
      dispatch(logInAction());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);