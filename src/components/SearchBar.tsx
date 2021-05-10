import { FC } from 'react';
import styled from 'styled-components';
import { device } from '../styles/constants';

import { TransparentButton } from './elements/Buttons';
import { InputElement } from './elements/InputElement';

const DivSeachBar = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  @media ${device.laptop} {
    flex-basis: 70%;
  }
  @media ${device.tablet} {
    order: 3;
    margin: auto;
  }
  @media ${device.mobileL} {
    flex-basis: 100%;
  }
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