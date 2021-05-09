import styled from 'styled-components';
import colors from '../../styles/constants';

const ButtonElement = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 3.2rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
`;

const MainButton = styled(ButtonElement)`
  color: white;
  background-color: ${colors.red}; 
  transition: 0.3s;
  :hover {
    background-color: ${colors.hover};
  }
`;

const TransparentButton = styled(ButtonElement)`
  background-color: transparent;
  color: ${colors.red};
  padding-left: 0;
  padding-right: 0;
  margin-left: 1.6rem;
`;

export { MainButton, TransparentButton }