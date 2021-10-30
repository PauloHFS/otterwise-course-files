import React from 'react';

import Article from '../Article/Article';

function Main({ articles }) {
  return (
    <main>
      {articles.map(({ title, text }) => {
        return <Article title={title} text={text} />;
      })}
    </main>
  );
}

export default Main;
