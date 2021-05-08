import { Dispatch, FC } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IActions, IState } from '../types/forRedux';
import { logOutAction, showPopUpAction } from '../store/actions';

import { ButtonElement } from './elements/ButtonElement';
import Logo from './Logo';
import SearchBar from './SearchBar';

const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
  height: 40px;
  align-items: center;
`;

const ButtonSign = styled(ButtonElement)`
`;

interface IHeaderProps {
  isAuthorized: boolean;
  logOutAction: () => void;
  showPopUpAction: (bool: boolean) => void;
}

// Component

const Header:FC<IHeaderProps> = ({ isAuthorized, logOutAction, showPopUpAction }) => {
  function buttonClickHandler(): void {
    !isAuthorized ? showPopUpAction(true) : logOutAction();
  }

  return (
    <DivHeader className="container">
      <Logo />
      <SearchBar />
      <ButtonSign onClick={buttonClickHandler}>
        {isAuthorized ? 'Выйти' : 'Войти'}
      </ButtonSign>
    </DivHeader>
  );
};

// Component

const mapStateToProps = ({ isAuthorized }: IState) => {
  return {
    isAuthorized,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IActions>) => {
  return {
    logOutAction: (): void => {
      dispatch(logOutAction());
    },
    showPopUpAction: (bool: boolean): void => {
      dispatch(showPopUpAction(bool));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);