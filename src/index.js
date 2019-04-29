/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './redux/todo/reducers'
import App from './App'
import About  from './components/about/About';
import Users  from './components/users/Users';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <Router>
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/todo">Tareas</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={About} />
        <Route path="/todo" exact component={App} />
        </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)