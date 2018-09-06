import React, { Component } from "react";
import userList from "./UserList";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import PropTypes from 'prop-types';
class UserListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            currentUserId: null
        }
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleSetCurrentUser = this.handleSetCurrentUser.bind(this);
    }
    componentDidMount() {
        var that = this;
        // fetch('path/to/user-api').then(function(response) {
        //     response.json().then(function(data) {
        //         that.setState({
        //             users: data
        //         })
        //     })
        // })
        this.setState({
            users: [
                {
                    id: 1,
                    name: "liming",
                    age: 12,
                    phone: 54445232
                }, {
                    id: 2,
                    name: "danny",
                    age: 22,
                    phone: 434343434
                }, {
                    id: 3,
                    name: "hanmeimei",
                    age: 15,
                    phone: 6343222
                }
            ]
        })
    }
    //新增用户
    handleAddUser(user) {
        var that = this;
        // fetch('/path/to/save-user-api', {
        //     method: "POST",
        //     body: JSON.stringfy({
        //         "username": user
        //     })
        // }).then(function(response) {
        //     response.json().then(function(newUser) {
        //         //将服务器端返回的新用户添加到state中
        //         this.setState((preState) => ({
        //             users: preState.users.concat([newUser])
        //         }))
        //     })
        // })
        this.setState((preState) => ({
            users: preState.users.concat([{
                id: this.state.users.length+1,
                name: user,
                age: 44,
                phone: 34342222
            }])
        }))
    }
    //设置当前用户
    handleSetCurrentUser(userId) {
        this.setState({
            currentUserId: userId
        })
    }
    //创建context对象，包含onAddUser方法
    getChildContext() {
        return {
            onAddUser: this.handleAddUser
        }
    }
    render() {
        //根据currentUserId，筛选出当前用户对象
        let filterUsers = this.state.users.filter((user) => {
            return user.id == this.state.currentUserId
        });
        
        const currentUser = filterUsers.length > 0 ? filterUsers[0] : null;
        return (
            /*通过props传递users*/
            <div>
                <UserList users={this.state.users} currentUserId = {this.state.currentUserId} onSetCurrentUser={this.handleSetCurrentUser}/>
                <UserDetail currentUser = {currentUser}/>
            </div>
        )
    }
}
//声明context的属性的类型信息
UserListContainer.childContextTypes = {
    onAddUser: PropTypes.func
}
export default UserListContainer;