import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../PostItem.css";
import like from "../images/like-default.png";

class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,  //帖子是否处于编辑状态
            post: props.post
        };
        this.handleVote = this.handleVote.bind(this);
        this.handleEditPost = this.handleEditPost.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }
    conponentWillReceiveProps(nextProps) {
        //父组件更新post后，更新PostItem的state
        if(this.state.post !== nextProps.post) {
            this.setState({
                post: nextProps.post
            })
        }
    }
    //处理点赞事件
    handleVote() {
        this.props.onVote(this.props.post.id);
    }
    //保存、编辑按钮点击后的逻辑
    handleEditPost() {
        const editing = this.state.editing;
        //当前处于编辑状态，调用父组件传递的onSave方法保存帖子
        if(editing) {
            this.props.onSave({
                ...this.state.post,
                date: this.getFormatDate()
            })
        } 
        this.setState({
            editing: !editing
        })
    }
    //处理标题textarea值得变化
    handleTitleChange(event) {
        const newPost = {
            ...this.state.post,
            title: event.target.value
        };
        this.setState({
            post: newPost
        })
    }
    getFormatDate() {
        return new Date();
    }
    render() {
        const {post} = this.state;
        return (
            <li className='item'>
                <div className='title'>
                    {this.state.editing ? 
                        <form>
                            <textarea value={post.title} onChange={this.handleTitleChange}/>
                        </form> : 
                        post.title
                    }
                </div>
                <div>
                    创建人：<span>{post.author}</span>
                </div>
                <div>
                    创建时间：<span>{post.date}</span>
                </div>
                <div className="like">
                    <span>
                        <img alt="vote" src={like} onClick={this.handleVote} />
                    </span>
                    <span>
                        {post.vote}
                    </span>
                </div>
                <div onClick={this.handleEditPost}>
                    <button>
                        {this.state.editing ? "保存" : "编辑"}
                    </button>
                </div>
            </li>
        )
    }
}
export default PostItem;