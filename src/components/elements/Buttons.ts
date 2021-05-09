import styled from 'styled-components';

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
  background-color: #E5261E; 
  transition: 0.3s;
  :hover {
    background-color: #CC221B;
  }
`;

const TransparentButton = styled(ButtonElement)`
  background-color: transparent;
  color: #E5261E;
  padding-left: 0;
  padding-right: 0;
  margin-left: 1.6rem;
`;

export { MainButton, TransparentButton }