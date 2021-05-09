import styled from 'styled-components';

import colors from '../../styles/constants';

export const InputElement = styled.input`
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid ${colors.gray_1};
  font-weight: 500;
  color: ${colors.gray_1};

  ::placeholder {
    font-weight: 400;
    color: ${colors.gray_3};
  }

  :focus {
    outline: none;
  }
`;