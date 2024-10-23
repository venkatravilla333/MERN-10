import React, { Component } from 'react'
import Render from './Render'
import A from './A'
import B from './B'
import C from './C'

export class Parent extends Component {
  render() {
    return (
      <div>
        <Render myrender={(count, updateCount) => {
          console.log(count)
          console.log(updateCount)
          return <A count={count} updateCount={updateCount} />
        }} />
        <Render myrender={(count, updateCount) => {
          console.log(count)
          console.log(updateCount)
          return <B count={count} updateCount={updateCount} />
        }} />
        <Render myrender={(count, updateCount) => {
          console.log(count)
          console.log(updateCount)
          return <C count={count} updateCount={updateCount} />
        }} />
      </div>
    )
  }
}

export default Parent