import React, { Component } from 'react';
// import './style.css';
function Welcome(props) {
    // return <h1 style = {{
    //     width: "100%",
    //     height: "50px",
    //     backgroundColor: "blue",
    //     fontSize: "20px"
    // }} className='foo'>
    //     Hello, {props.name}
    // </h1>;
    //style第一个大括号表示style的值是一个Javascript表达式，第二个大括号表示这个Javascript表达式是一个对象
    const style = {
        width: "100%",
        height: "50px",
        backgroundColor: "blue",
        fontSize: "20px"
    }
    return <h1 style={style}>Hello, {props.name}</h1>
}
Welcome.defaultProps = {
    name: "Stranger"
}
export default Welcome;