import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import List from './list'
import User from './User'

function App() {
  return (
    <Router>
      <div id="container">
        <Route exact path="/" component={List}/>
        <Route path="/user/:id" component={User}/>
      </div>
    </Router>
  );
}

export default App;
