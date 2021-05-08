import { FC } from 'react';
import { Link } from 'react-router-dom';
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
  a {
    color: ${props => props.active && '#E5261E'};
  }
`;

const NavBar: FC = () => {
  function linkClickHandler(e: any): void {
    // e.preventDefault();
    // if (e.target.localName === 'li') {
    //   console.log(e.target);
    // }
    // console.log(e);
    // e.target.setAttribute('active', 'true');
  }
  
  return (
    <DivNavBar className="container">
      <Ul>
        <Li active onClick={(e) => linkClickHandler(e)}>
          <Link to="./movies">Фильмы</Link>
        </Li>
        <Li onClick={(e) => linkClickHandler(e)}>
          <Link to="./tv">Телеканалы</Link>
        </Li >
      </Ul>
    </DivNavBar>
  );
}

export default NavBar;