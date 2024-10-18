
import ReactDOM from 'react-dom/client'
import App from './App'


var div = document.getElementById('root')
// console.log(div)

var parent = ReactDOM.createRoot(div)

parent.render(App())