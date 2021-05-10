import { FC } from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

import genres from '../store/genres';
import { TitleElement } from './elements/TitleElement';
import { device, swipeParams } from '../styles/constants';


const DivGenres = styled.div`
  margin: 3rem auto;
`;

const GenreItem = styled.div`
  border-radius: 6px;
  cursor: pointer;
  opacity: 0.8;
  position: relative;
  box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  padding-top: 18%;
  :hover {
    opacity: 1;
  }
  @media ${device.laptop} {
    padding-top: 24%;
  }
  @media ${device.tablet} {
    padding-top: 36%;
  }
  @media ${device.mobileS} {
    padding-top: 72%;
  }
`;

const GenreTitle = styled.p`
  font-size: 2rem;
  color: white;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

const GenreSmile = styled.span`
  font-size: 48px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GenresBlock: FC = () => {
  return (
    <DivGenres className="container">
      <TitleElement>Жанры</TitleElement>
      <Swiper {...swipeParams}>
        {genres.map(genre => (
            <GenreItem key={genre.id} style={{backgroundImage: genre.backgroung}}>
              <GenreSmile>{genre.smile}</GenreSmile>
              <GenreTitle>{genre.title}</GenreTitle>
            </GenreItem>
        ))}
      </Swiper>
    </DivGenres>
  );
}

export default GenresBlock;