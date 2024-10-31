
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'


var div = document.getElementById('root')
// console.log(div)

var parent = ReactDOM.createRoot(div)

parent.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)