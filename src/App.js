import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Counter from './Counter'
import TypeName from './TypeName'
import Lifecycle from './Lifecycle'

const App = (props) =>
  <div>
    <Router>
      <Route path={'/lifecycle'} component={Lifecycle} />
      <ul>
        <li>
        <Link to="/lifecycle">Lifecycle</Link>
        </li>
      </ul>
    </Router>
   
    <Counter number={5}/>
    <Counter />
    <TypeName />
  </div>
  

export default App
