import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount } from '../Redux/store'

function M() {
  var count = useSelector((state) => {
  return state.count
 })
 var dispatch = useDispatch()
  return (
    <div>
      <h2>M: count: {count}</h2>
      <button onClick={() => dispatch(increaseCount())}>increase</button>
      <button onClick={() => dispatch(decreaseCount())}>decrease</button>
    </div>
  );
}

export default M