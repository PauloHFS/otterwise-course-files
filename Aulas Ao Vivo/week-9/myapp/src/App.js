import { Fragment } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

/* 
  Crie uma página com uma lista de artigos.
  
  Essa página deve estar dividida em três seções: Header, Main e Footer.

  No Header deve haver o título da página.
  No Main devem ser renderizados os artigos com um título e uma descrição.
  No Footer coloque um texto indicando quem desenvolveu a página.

  Os textos e a quantidade de artigos é de decisão de vocês.

  Dicas de componentes para serem criados: Header, Main, Footer e Article.
*/
function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
