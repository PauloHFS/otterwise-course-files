import Article from '../Article/Article';

const Main = () => {
  const artigos = [
    {
      title: 'title #0',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae dolor a mauris euismod dapibus.',
    },
    {
      title: 'title #1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae dolor a mauris euismod dapibus.',
    },
    {
      title: 'title #2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae dolor a mauris euismod dapibus.',
    },
  ];

  return (
    <main>
      {artigos.map(({ title, description }, index) => (
        <Article title={title} description={description} key={index} />
      ))}
    </main>
  );
};

export default Main;
