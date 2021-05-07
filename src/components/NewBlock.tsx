import { FC } from 'react';
import styled from 'styled-components';

import movies from '../store/movies';
import { TitleElement } from './elements/TitleElement';

const DivNew = styled.div`
  margin: 3rem auto;
`;

const MoviesList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const MovieDescription = styled.p`
  display: none;
  position: absolute;
  content: '';
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  color: #F2F2F2;
  padding: 1.6rem;
  font-size: 1.6rem;
  line-height: 1.4;
`;

const MovieItem = styled.li`
  flex-basis: 25%;
`;

const MovieCover = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  :hover ${MovieDescription} {
    display: block;
  }
`;

const MovieImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const MovieTitle = styled.p`
  margin: 1.6rem auto;
  font-size: 2rem;
  line-height: 1.2;
`;

const NewBlock: FC = () => {
  return (
    <DivNew className="container">
      <TitleElement>🔥 Новинки</TitleElement>
      <MoviesList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <MovieCover>
              <MovieImg src={movie.img} alt={movie.title} />
              <MovieDescription>{movie.description}</MovieDescription>
            </MovieCover>
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieItem>
        ))}
      </MoviesList>
    </DivNew>
  );
}

export default NewBlock;