import React, { Component } from 'react';
function withPersistentData(WrappedComponent) {
    return class extends Component {
        componentWillMount() {
            let data = localStorage.getItem('data');
            this.setState({data});
        }
        render() {
            //通过{...this.props}把传递给当前组件的属性继续传递给被包装的组件
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}
class MyComponent extends Component {
    reder() {
        return <div>{this.props.data}</div>
    }
}

const MyComponentWithPersistentData = withPersistentData(MyComponent)