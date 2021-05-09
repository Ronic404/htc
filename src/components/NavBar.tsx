import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import channelsList from '../store/channelsList';
import colors from '../styles/constants';

const DivNavBar = styled.div`
  user-select: none;
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
  border-bottom: ${props => props.active && `2px solid ${colors.red}`};
  a {
    color: ${props => props.active && colors.red};
  }
`;

const NavBar: FC = () => {
  const getPageName = useLocation().pathname.split('/')[1];
  
  return (
    <DivNavBar className="container">
      <Ul>
        {channelsList.map(channel => (
          <Li key={channel.id} active={getPageName === channel.id}>
            <Link to={channel.link}>{channel.title}</Link>
          </Li>
        ))}
      </Ul>
    </DivNavBar>
  );
}

export default NavBar;