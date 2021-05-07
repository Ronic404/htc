interface Igenres {
  id: number;
  title: string;
  smile: string;
  backgroung: string;
}

const genres: Igenres[] = [
  {
    id: 1,
    title: 'Комедии',
    smile: '😁',
    backgroung: 'linear-gradient(127.83deg, #F2C94C 8.44%, #F29A4A 91.36%)',
  },
  {
    id: 2,
    title: 'Драмы',
    smile: '😭',
    backgroung: 'linear-gradient(127.83deg, #F2994A 8.44%, #EB5757 91.36%)',
  },
  {
    id: 3,
    title: 'Фантастика',
    smile: '👽',
    backgroung: 'linear-gradient(127.83deg, #56CCF2 8.44%, #2F80ED 91.36%)',
  },
  {
    id: 4,
    title: 'Ужасы',
    smile: '👻',
    backgroung: 'linear-gradient(127.83deg, #828282 8.44%, #333333 91.36%)',
  },
]

export default genres;