import { FC } from 'react';
import styled from 'styled-components';

import genres from '../store/genres';
import { TitleElement } from './elements/TitleElement';

const DivGenres = styled.div`
  margin: 3rem auto;
`;

const GenreList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const GenreItem = styled.li`
  flex-basis: 25%;
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
      <GenreList>
        {genres.map(genre => (
            <GenreItem key={genre.id} style={{backgroundImage: genre.backgroung}}>
              <GenreSmile>{genre.smile}</GenreSmile>
              <GenreTitle>{genre.title}</GenreTitle>
            </GenreItem>
        ))}
      </GenreList>
    </DivGenres>
  );
}

export default GenresBlock;