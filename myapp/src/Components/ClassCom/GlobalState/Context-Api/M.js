import React, { Component } from 'react'
import { nameContext, countContext, colorContext } from './A'
export class M extends Component {
  render() {
    return (
      <nameContext.Consumer>
        {
          (name) => {
            return <countContext.Consumer>
              {
                (count) => {
                  return <colorContext.Consumer>
                    {
                      (color) => {
                        return <div>
                          <h3>Name: {name}</h3>
                          <h3>Count: {count}</h3>
                          <h3>Color: {color}</h3>
                        </div>
                      }
                    }
                  </colorContext.Consumer>
                }
              }
            </countContext.Consumer>
          }
        }
        
        
      </nameContext.Consumer>
    )
  }
}

export default M

