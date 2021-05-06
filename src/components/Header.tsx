import { FC } from 'react';
import styled from 'styled-components';

import { ButtonElement } from './elements/Button';
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

const Header:FC = () => {
  return (
    <DivHeader className="container">
      <Logo />
      <SearchBar />
      <ButtonSign>Войти</ButtonSign>
    </DivHeader>
  );
};

export default Header;