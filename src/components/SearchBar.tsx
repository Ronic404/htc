import { FC } from 'react';
import styled from 'styled-components';

import { TransparentButton } from './elements/Buttons';
import { InputElement } from './elements/InputElement';

const DivSeachBar = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

const InputSearch = styled(InputElement)`
  flex: 1;
`;

const SearchBar: FC = () => {
  return (
    <DivSeachBar>
      <InputSearch placeholder="Поиск..." />
      <TransparentButton>Найти</TransparentButton>
    </DivSeachBar>
  );
}

export default SearchBar;