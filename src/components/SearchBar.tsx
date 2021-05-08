import { FC } from 'react';
import styled from 'styled-components';

import { ButtonElement } from './elements/ButtonElement';
import { InputElement } from './elements/InputElement';

const DivSeachBar = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

const InputSearch = styled(InputElement)`
  flex: 1;
`;

const ButtonSearch = styled(ButtonElement)`
  background-color: transparent;
  color: #E5261E;
  :hover {
    background-color: transparent;
  }
`;

const SearchBar: FC = () => {
  return (
    <DivSeachBar>
      <InputSearch placeholder="Поиск..." />
      <ButtonSearch>Найти</ButtonSearch>
    </DivSeachBar>
  );
}

export default SearchBar;