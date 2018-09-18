import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './chapter03/Modal';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./chapter07/src/components/Home";
import Login from "./chapter07/src/components/Login";

const Profile = ({user}) => <div>name: {user.name}</div>;
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/posts" component={Home}/>
        </Switch>
      </Router>
    )
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         Hello, world!
  //       </p>
  //     </div>
  //   );
  // }
  // render() {
  //   return [
  //     <ul>
  //       <ListComponent />
  //     </ul>,
  //     <StringComponent />
  //   ]
  // }
  /*
  constructor(props) {
    super(props);
    this.state = {
      user: { name: "react" }
    }
  }
  //将user置为null，模拟异常
  onClick = () => {
    this.setState({user: null})
  };
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Profile user={this.state.user} />
        </ErrorBoundary>
        <button onClick={this.onClick}>更新</button>
      </div>
    )
  }
  */
//  constructor(props) {
//    super(props);
//    this.state = {showModal: true};
//  }
//  //关闭弹窗
//  closeModal = () => {
//    this.setState({showModal: false})
//  }
//  render() {
//    return (
//      <div>
//       <h2>Dashboard</h2>
//       {this.state.showModal && (
//         <Modal onClose={this.closeModal}>Modal Dialog</Modal>
//       )}
//      </div>
//    )
//  }

}

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hasError: false
//     };
//   }
//   componentDidCatch(error,info) {
//     //显示错误UI
//     this.setState({
//       hasError: true
//     });
//     //同时输出错误日志
//     console.log(error,info)
//   }
//   render() {
//     if(this.state.hasError) {
//       return <h1>Oops, something went wrong.</h1>
//     }
//     return this.props.children;
//   }
// }

// class ListComponent extends Component {
//   render() {
//     return [
//       <li key="A">First item</li>,
//       <li key="B">Second item</li>,
//       <li key="C">Third item</li>
//     ]
//   }
// }
// class StringComponent extends Component {
//   render() {
//     return "Just a strings";
//   }
// }
export default App;
