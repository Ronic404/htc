import { Dispatch, FC, useState, ChangeEvent, KeyboardEvent, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { IActions, IState } from '../types/forRedux';
import { logOutAction, showPopUpAction } from '../store/actions';

import { MainButton, TransparentButton } from './elements/Buttons';
import Logo from './Logo';
import SearchBar from './SearchBar';
import { InputElement } from './elements/InputElement';

const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;
  height: 40px;
  align-items: center;
`;

const DivAuth = styled.div`
  width: 250px;
  display: flex;
  justify-content: flex-end;
`;

const InputChangeName = styled(InputElement)`
  display: flex;
`;

const AuthName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  align-self: center;
  overflow: hidden;
`;

interface IHeaderProps {
  isAuthorized: boolean;
  logOutAction: () => void;
  showPopUpAction: (bool: boolean) => void;
}

// Component

const Header:FC<IHeaderProps> = ({ isAuthorized, logOutAction, showPopUpAction }) => {
  const localStorageSavedName = localStorage.getItem('name');
  const [personName, setPersonName] = useState<string>(localStorageSavedName || 'name');
  const [showChangePersonName, setShowChangePersonName] = useState<boolean>(false);
  const [prevName, setPrevName] = useState<string>(personName);

  console.log('Render header');

  if (isAuthorized) {
    localStorage.setItem('name', personName);
  }


  const clicker = useCallback((e: any) => {
    if (!e.target.classList.contains(InputChangeName.styledComponentId)) {
      setShowChangePersonName(false);
      setPersonName(personName || prevName);
    }
  }, [personName, prevName])
  
  useEffect(() => {
    document.addEventListener('mousedown', clicker);
    return () => { document.removeEventListener('mousedown', clicker) };
  }, [clicker]);

  function buttonClickHandler(): void {
    if (isAuthorized) {
      logOutAction();
      localStorage.removeItem('isAuth');
    } else {
      showPopUpAction(true);
    } 
  }

  function changePersonName(e: ChangeEvent<HTMLInputElement>): void {
    setPersonName(e.target.value);
  }

  function saveName(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.code === 'Enter') {
      if (personName === '') {
        setShowChangePersonName(false);
        setPersonName(prevName);
      } else {
        setShowChangePersonName(false);
        setPrevName(personName);
      }
    } else if (e.code === 'Escape') {
      setPersonName(prevName);
      setShowChangePersonName(false);
    }
  }

  return (
    <DivHeader className="container">
      <Logo />
      <SearchBar />
      <DivAuth>
        {isAuthorized ?
          <>
            {showChangePersonName ?
              <>
                <InputChangeName value={personName} onChange={(e) => changePersonName(e)} onKeyDown={saveName} autoFocus />
                <TransparentButton onClick={buttonClickHandler}>Выйти</TransparentButton>
              </> :
              <>
                <AuthName onClick={() => setShowChangePersonName(true)}>{personName}</AuthName>
                <TransparentButton onClick={buttonClickHandler}>Выйти</TransparentButton>
              </>
            }
          </> :
          <MainButton onClick={buttonClickHandler}>Войти</MainButton>
        }
      </DivAuth>
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