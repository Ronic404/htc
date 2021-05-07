import cartoon from '../img/covers/cartoon.jpg'
import batman from '../img/covers/batman.jpg'
import hollywood from '../img/covers/hollywood.jpg'
import strip from '../img/covers/strip.jpg'

interface Imovie {
  id: number;
  title: string;
  description: string;
  img: string;
}

const movies: Imovie[] = [
  {
    id: 1,
    title: "Мульт в кино. Выпуск №103. Некогда грустить!",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi fugiat, praesentium autem cumque quisquam.",
    img: cartoon,
  },
  {
    id: 2,
    title: "Новый Бэтмен",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi fugiat, praesentium autem cumque quisquam.",
    img: batman,
  },
  {
    id: 3,
    title: "Однажды... в Голливуде",
    description: "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.",
    img: hollywood,
  },
  {
    id: 4,
    title: "Стриптизёрши",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum modi fugiat, praesentium autem cumque quisquam.",
    img: strip,
  },
]

export default movies;