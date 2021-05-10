import { FC } from 'react';
import styled from 'styled-components';

import tvSchedule from '../../store/tvSchedule';
import colors from '../../styles/constants';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const DivTvPage = styled.div`
  margin: 2.5rem auto;
`;

const ChannelsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ChannelsItem = styled.li`
  display: flex;
  background: #F2F2F2;
  border-radius: 8px;
  padding: 2rem 0;
`;

const DivChannelLogo = styled.div`
  display: flex;
  flex-basis: 30%;
  justify-content: center;
  align-items: center;
`;

const ChannelLogo = styled.img`
  max-height: 64px;
  max-width: 114px;
`;

const ChannelDescription = styled.div`
  flex-basis: 70%;
`;

const ChannelTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const GuideList = styled.ul`
`;

const DivProgram = styled.li`
  display: flex;
  font-size: 1.6rem;
  margin: 1rem 0;
  color: ${props => props.active && colors.red} !important;
`;

const ProgramTime = styled.p`
  margin-right: 2rem;
`;

const ProgramName = styled.p`
`;

const CustomScroll = styled(SimpleBar)`
  max-height: 650px;
  padding-right: 2rem;
  .simplebar-track {
    background: ${colors.gray_6};
    width: 8px;
    border-radius: 2px;
  }
  .simplebar-scrollbar::before {
    background-color: ${colors.gray_4};
    width: 4px;
    height: 500px;
    border-radius: 2px;
  }
`;

const TvPage: FC = () => {
  return (
    <DivTvPage className="container">
      <CustomScroll>
        <ChannelsList>
          {tvSchedule.map(channel => (
            <ChannelsItem key={channel.id}>
              <DivChannelLogo>
                <ChannelLogo src={channel.img} alt={channel.title} />
              </DivChannelLogo>
              <ChannelDescription>
                <ChannelTitle>{channel.title}</ChannelTitle>
                <GuideList>
                  {channel.guide.map(program => (
                    <DivProgram key={program.id} active={program.active}>
                      <ProgramTime>{program.time}</ProgramTime>
                      <ProgramName>{program.name}</ProgramName>
                    </DivProgram>
                  ))}
                </GuideList>
              </ChannelDescription>
            </ChannelsItem>
          ))}
        </ChannelsList>
      </CustomScroll>
    </DivTvPage>
  );
}

export default TvPage;