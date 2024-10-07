import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount } from '../Redux/Count/countAction'
import { buyCake } from '../Redux/Cake/cakeAction'
// import { decreaseCount, increaseCount } from '../Redux/store'
// import { store } from '../Redux/store'

function M() {
 var count =  useSelector((state) => {
    return state.countReducer.count
  })
 var cakes =  useSelector((state) => {
    return state.cakeReducer.noOfCakes;
  })
  // var data = store.getState()
  // console.log(data)
 var dispatch = useDispatch()
  return (
    <div>
      <h2>M: count: {count}</h2>
      <button onClick={()=>dispatch(increaseCount())}>increase</button>
      <button onClick={()=>dispatch(decreaseCount())}>decrease</button>
      <h2>M: cakes: {cakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

export default M