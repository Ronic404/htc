import first from '../img/tv/first.svg';
import twoAndTwo from '../img/tv/twoAndTwo.svg';
import rbc from '../img/tv/rbc.svg';
import amedia from '../img/tv/amedia.svg';

interface IGuide {
  id: number;
  active?: boolean;
  time: string;
  name: string;
}

interface ITvSchedile {
  id: number;
  img: string;
  title: string;
  guide: IGuide[];
} 

const tvSchedule: ITvSchedile[] = [
  {
    id: 1,
    img: first,
    title: 'Первый канал',
    guide: [
      {
        id: 1,
        active: true,
        time: '13:00',
        name: 'Новости (с субтитрами)'
      },
      {
        id: 2,
        time: '14:00',
        name: 'Давай поженимся'
      },
      {
        id: 3,
        time: '15:00',
        name: 'Другие новости'
      },
    ]
  },
  {
    id: 2,
    img: twoAndTwo,
    title: '2x2',
    guide: [
      {
        id: 1,
        active: true,
        time: '13:00',
        name: 'МУЛЬТ ТВ. Сезон 4, 7 серия'
      },
      {
        id: 2,
        time: '14:00',
        name: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'
      },
      {
        id: 3,
        time: '15:00',
        name: 'БУРДАШЕВ. Сезон 1, 20 серия'
      },
    ]
  },
  {
    id: 3,
    img: rbc,
    title: 'РБК',
    guide: [
      {
        id: 1,
        active: true,
        time: '13:00',
        name: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'
      },
      {
        id: 2,
        time: '14:00',
        name: 'ДЕНЬ. Главные темы'
      },
      {
        id: 3,
        time: '15:00',
        name: 'Главные новости'
      },
    ]
  },
  {
    id: 4,
    img: amedia,
    title: 'AMEDIA PREMIUM',
    guide: [
      {
        id: 1,
        active: true,
        time: '13:00',
        name: 'Клиент всегда мёртв'
      },
      {
        id: 2,
        time: '14:00',
        name: 'Голодные игры: Сойка-пересмешница. Часть I'
      },
      {
        id: 3,
        time: '15:00',
        name: 'Секс в большом городе'
      },
    ]
  },
  {
    id: 5,
    img: first,
    title: 'Первый канал',
    guide: [
      {
        id: 1,
        active: true,
        time: '13:00',
        name: 'Новости (с субтитрами)'
      },
      {
        id: 2,
        time: '14:00',
        name: 'Давай поженимся'
      },
      {
        id: 3,
        time: '15:00',
        name: 'Другие новости'
      },
    ]
  },
];

export default tvSchedule;