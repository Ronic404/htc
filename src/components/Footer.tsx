import { FC } from 'react';
import styled from 'styled-components';

import archer from '../img/archer.svg'
import colors, { device } from '../styles/constants';

const DivFooter = styled.div`
  background: ${colors.gray_6};
  margin-top: 7rem;
  @media ${device.tablet} {
    margin-top: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 2.5rem 0;
`;

const Archer = styled.img`
  margin-right: 4rem;
  @media ${device.mobileL} {
    margin-right: 2rem;
  }
`;

const Socials = styled.div`
  font-size: 1.6rem;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Adress = styled.p`
`;

const PhoneNumbers = styled.a`
`;

const Link = styled.a`
  font-weight: 500;
  color: ${colors.htc};
  margin-top: 0.4rem;
`;

const Footer: FC = () => {
  return (
    <DivFooter>
      <Container className="container">
        <Archer src={archer} alt="Logo" />
        <Socials>
          <Adress>426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</Adress>
          <PhoneNumbers href="tel:+73412938861">+7 (3412) 93-88-61, 43-29-29</PhoneNumbers>
          <Link href="https://htc-cs.ru/" target="_blank">htc-cs.ru</Link>
        </Socials>
      </Container>
    </DivFooter>
  );
}

export default Footer;