import { Dispatch, FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { logInAction, showPopUpAction } from '../store/actions';
import { IActions } from '../types/forRedux';

import { MainButton } from './elements/Buttons';
import { InputElement } from './elements/InputElement';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #333333;
  opacity: 0.6;
`;

const DivPopUp = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 400px;
  background: white;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3.6rem;
`;

const PopUpTitle = styled.h4`
  font-size: 2.8rem;
  font-weight: 500;
  text-align: center;
`;

const FormPopUp = styled.form`
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: space-between;
  input, label {
    margin-top: 2.4rem;
  }
`;

const DivInputs = styled.div`
  position: relative;
  user-select: none;
`;

const Input = styled(InputElement)`
  width: 100%;
  padding-bottom: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.6rem;
  position: relative;
  display: inline-block;
  ::before {
    content: '';
    display: inline-block;
    position: relative;
    top: 3px;
    border: 1px solid #333333;
    border-radius: 4px;
    width: 1em;
    height: 1em;
    margin-right: 1rem;
  }
`;

const CheckboxElement = styled.input`
  display: none;
  :checked + ${Label}::after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 7px;
    left: 4px;
    width: 10px;
    height: 5px;
    border: 1px solid #E5261E;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
  }
`;

const Wrong = styled.p`
  display: ${props => props.active ? 'block' : 'none'};
  color: red;
  position: absolute;
  bottom: 30px;
`;

const Submit = styled(MainButton)`
  align-self: center;
`;

interface IPopUpProps {
  logInAction: () => void; 
  showPopUpAction: (bool: boolean) => void;
}

// Component

const PopUp: FC<IPopUpProps> = ({ logInAction, showPopUpAction }) => {
  const [isWrong, setIsWrong] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') showPopUpAction(false);
    });
    return () => { document.removeEventListener('keydown', () => showPopUpAction(false)) };
  }, [showPopUpAction]);

  function submitClickHandler(e: MouseEvent) {
    e.preventDefault();
    if (loginRef.current?.value === '123' && passwordRef.current?.value === '123') {
      logInAction();
      showPopUpAction(false);
    } else if (loginRef.current?.value === '' || passwordRef.current?.value === '') {
      setErrorMessage('Введите логин и пароль');
      setIsWrong(true);
    } else {
      setErrorMessage('Неверный логин или пароль');
      setIsWrong(true);
    }
  }

  return (
  <>
    <Container onClick={() => showPopUpAction(false)}>
    </Container>
    <DivPopUp>
      <PopUpTitle>Вход</PopUpTitle>
      <FormPopUp method="POST" action="#">
        <DivInputs onKeyDown={() => setIsWrong(false)}>
          <Input ref={loginRef} type="text" name="login" placeholder="Логин" autoFocus/>
          <Input ref={passwordRef} type="password" name="password" placeholder="Пароль" />
          <CheckboxElement type="checkbox" id="remember" />
          <Label htmlFor="remember">Запомнить</Label>
          <Wrong active={isWrong}>{errorMessage}</Wrong>
        </DivInputs>
        <Submit type="submit" onClick={(e) => submitClickHandler(e)}>Войти</Submit>
      </FormPopUp>
    </DivPopUp>
  </>
 );
}

// Component
  
const mapDispatchToProps = (dispatch: Dispatch<IActions>) => {
  return {
    logInAction: (): void => {
      dispatch(logInAction());
    },
    showPopUpAction: (bool: boolean): void => {
      dispatch(showPopUpAction(bool));
    },
  }
}

export default connect(null, mapDispatchToProps)(PopUp);