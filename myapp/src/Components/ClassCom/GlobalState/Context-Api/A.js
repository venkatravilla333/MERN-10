import React, { Component } from 'react'
import B from './B'
import C from './C'

export var nameContext = React.createContext('sachin')
export var countContext = React.createContext(0)
export var colorContext = React.createContext('red')

export class A extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'kohli',
      count: 0,
      color: 'green'
    }

  }

  updateCount = () => {
    console.log(this)
    this.setState({
      count: this.state.count+1
    })
  }
  updateColor = () => {
    console.log(this)
    this.setState({
      color: this.state.color = 'yellow'
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.updateCount}>update Count</button>
        <button onClick={this.updateColor}>update color</button>
        <colorContext.Provider value={this.state.color}>
        <countContext.Provider value={this.state.count}>
        <nameContext.Provider value={this.state.name}>
        <B />
        <C />
        </nameContext.Provider>
        </countContext.Provider>
        </colorContext.Provider>
        
      </div>
    )
  }
}

export default A