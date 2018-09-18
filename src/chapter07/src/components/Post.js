import React,{Component} from "react";
import PostEditor from "./PostEditor";
import PostView from "./PostView";
import CommentList from "./CommentList";
import {get,post,put} from "../utils/require";
import url from "../utils/util";
import "./Post.css";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            comments: [],
            editing: false
        }
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handlePostSave = this.handlePostSave.bind(this);
        this.handlePostCancel = this.handlePostCancel.bind(this);
        this.refreshComments = this.refreshComments.bind(this);
        this.refreshPost = this.refreshPost.bind(this);
    }
    componentDidMount() {
        this.refreshComments();
        this.refreshPost();
    }
    //获取帖子详情
    refreshPost() {
        const postId = this.props.match.params.id;
        get(url.getPostById(postId)).then(data => {
            if(!data.error && data.length === 1) {
                this.setState({
                    post: data[0]
                })
            }
        })
    }
    //获取评论列表
    refreshComments() {
        const postId = this.props.match.params.id;
        get(url.getCommentList(postId)).then(data => {
            if(!data.error) {
                this.setState({
                    comments: data
                })
            }
        })
    }
    //让帖子处于编辑状态
    handleEditClick() {
        this.setState({
            editing: true
        })
    }
    //保存帖子
    handlePostSave(data) {
        const id = this.props.match.params.id;
        this.savePost(id,data);
    }
    //取消编辑帖子
    handlePostCancel() {
        this.setState({
            editing: false
        })
    }
    //提交新的评论
    handleCommentSubmit(content) {
        const postId = this.props.match.params.id;
        const comment = {
            author: this.props.userId,
            post: postId,
            content: content
        };
        this.saveComment(comment);
    } 
}