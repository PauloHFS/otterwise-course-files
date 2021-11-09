import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './router/Home'
import Comment from './router/Comment'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/comments/:id'>
          <Comment />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
