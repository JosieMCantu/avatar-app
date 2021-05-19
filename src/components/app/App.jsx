import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'; 
import AvatarContainer from '../../containers/AvatarContainer';
import AvatarDetailContainer from '../../containers/AvatarDetailContainer';
import '../app/App.css';


export default function App() {
  return <Router>
  <Switch>
    <Route exact path="/" component={AvatarContainer} />
    <Route path="/:id" component={AvatarDetailContainer} />
  </Switch>
</Router>
}
