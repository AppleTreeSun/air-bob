import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { addCount } from './store';

const App = memo(() => {

  const { count } = useSelector(state => ({
    count: state.home.count
  }), shallowEqual)

  const dispatch = useDispatch()

  const increment = () => dispatch(addCount(10))

  return (
    <div>
      <h2>App组件</h2>
      <h2>{count}</h2>
      <button onClick={() => increment()}>+10</button>
    </div>
  )
})

export default App