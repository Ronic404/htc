import { FC } from 'react';
import styled from 'styled-components';

const DivNavBar = styled.div`
`;

const Ul = styled.ul`
  display: flex;
  font-size: 2.8rem;
  font-weight: 500;
  justify-content: center;
`;

const Li = styled.li`
  padding: 1rem 0;
  margin: 0 1rem;
  cursor: pointer;
  border-bottom: ${props => props.active && '2px solid #E5261E'};
  color: ${props => props.active && '#E5261E'};
`;

const NavBar: FC = () => {
  return (
    <DivNavBar className="container">
      <Ul>
        <Li active>Фильмы</Li>
        <Li>Телеканалы</Li>
      </Ul>
    </DivNavBar>
  );
}

export default NavBar;