import {Route, Switch} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/CenterPage/Gaming'
import SavedGames from './components/CenterPage/Savedgames'
import Trending from './components/CenterPage/Trending'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/gaming" component={Gaming} />
    <Route exact path="/saved-games" component={SavedGames} />
    <Route exact path="/trending" component={Trending} />
  </Switch>
)
export default App
