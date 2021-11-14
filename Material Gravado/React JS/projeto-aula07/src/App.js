import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './routes/Home'
import Dashboard from './routes/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
