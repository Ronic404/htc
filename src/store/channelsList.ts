interface IChannelList {
  id: string,
  title: string,
  link: string,
}

const channelsList: IChannelList[] = [
  {
    id: 'movies',
    title: 'Фильмы',
    link: './movies',
  },
  {
    id: 'tv',
    title: 'Телеканалы',
    link: './tv',
  },
]

export default channelsList;