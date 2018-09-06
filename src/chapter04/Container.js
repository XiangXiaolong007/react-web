import React,{Component} from 'react';
import AutoFocusTextInput from './AutoFocusTextInput';
class Container extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        //通过ref调用AutoFocusTextInput组件的方法
        console.log(this.inputInstance)
        this.inputInstance.blur();
    }
    render() {
        return (
            <div>
                <AutoFocusTextInput ref={(input) => {this.inputInstance = input}}/>
                <button onClick={this.handleClick}>失去焦点</button>
            </div>
        )
    }
}
export default Container;