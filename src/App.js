import React from 'react'

import Counter from './Counter'
import TypeName from './TypeName'
import Lifecycle from './Lifecycle'

const App = (props) =>
  <div>
    <Lifecycle />
    <Counter number={5}/>
    <Counter />
    <TypeName />
  </div>
  

export default App
