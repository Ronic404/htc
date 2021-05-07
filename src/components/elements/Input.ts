import styled from 'styled-components';

export const InputElement = styled.input`
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid #333333;
  font-weight: 500;

  ::placeholder {
    font-weight: 400;
  }

  :focus {
    outline: none;
  }
`;