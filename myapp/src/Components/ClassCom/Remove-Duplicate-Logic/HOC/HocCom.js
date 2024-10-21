import React, {Component} from 'react'


var HocCom = (OriginalCom) => {
  class NewCom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    changeCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }
    render() {
      return (
        <div>
          <OriginalCom count={this.state.count} changeCount={this.changeCount} />
        </div>
      )
    }
  }
  
 return NewCom
  
}

export default HocCom