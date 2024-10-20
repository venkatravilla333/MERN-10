import React, { Component } from 'react'
import C from './C'
import B from './B'
import {Provider} from 'react-redux'
import { store } from '../Redux/store'


export class A extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <B />
        <C/>
      </Provider>
      </div>
    )
  }
}

export default A