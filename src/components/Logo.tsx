import { FC } from 'react';
import styled from 'styled-components';

import sign from '../img/sign.svg';

const DivLogo = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
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