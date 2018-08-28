import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PostList from './PostList';
import Welcome from './Welcome';
import LoginForm from './LoginForm';
import ReactStackForm from './chapter02/ReactStackForm';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<PostList />,document.getElementById("root"));
// ReactDOM.render(<Welcome />,document.getElementById("root"));
// ReactDOM.render(<LoginForm />,document.getElementById("root"));
// ReactDOM.render(<ReactStackForm />,document.getElementById("root"));
registerServiceWorker();
