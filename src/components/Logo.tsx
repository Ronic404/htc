import { FC } from 'react';
import styled from 'styled-components';

import sign from '../img/sign.svg';
import { device } from '../styles/constants';

const DivLogo = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  @media ${device.laptop} {
    flex-basis: 100%;
    justify-content: center;
  }
  @media ${device.tablet} {
    flex-basis: 50%;
    justify-content: flex-start;
  }
`;

const ImgLogo = styled.img`
  margin-right: 1rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
`;

const Logo: FC = () => {
  return (
    <DivLogo>
      <ImgLogo src={sign} alt="sign" />
      <H1>Видеосервис</H1>
    </DivLogo>
  );
};

export default Logo;