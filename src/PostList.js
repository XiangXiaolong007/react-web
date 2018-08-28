import React, { Component } from "react";
import PostItem from "./chapter02/PostItem";
import "./PostList.css";

// const data = [
//     {title: "大家一起来讨论React吧", author: "张三", date: "2017-09-01 10:00"},
//     {title: "前端框架，你最爱哪一个", author: "李四", date: "2017-09-01 12:00"},
//     {title: "Web App的时代已经到来", author: "王五", date: "2017-09-01 14:00"}
// ]
class PostList extends Component {
    // render() {
    //     return (
    //         <div>
    //             帖子列表:
    //             <ul>
    //                 {data.map(item => 
    //                     <PostItem
    //                         title = {item.title}
    //                         author = {item.author}
    //                         date = {item.date}
    //                     />
    //                 )}
    //             </ul>
    //         </div>
    //     )
    // }
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.timer = null; //定时器
        this.handleVote = this.handleVote.bind(this); //ES 6 class中，必须手动绑定方法this的指向
        this.handleSave = this.handleSave.bind(this);
    }
    componentDidMount() {
        //用setTimeout模拟异步从服务器端获取数据
        this.timer = setTimeout(() => {
            this.setState({
                posts: [{
                    id: 1,
                    title: "大家一起来讨论React吧",
                    author: "张三",
                    date: "2017-09-01 10:00",
                    vote: 0
                }, {
                    id: 2,
                    title: "前端框架，你最爱哪一个",
                    author: "李四",
                    date: "2017-09-01 12:00",
                    vote: 0
                }, {
                    id: 3,
                    title: "Web App的时代已经到来",
                    author: "王五",
                    date: "2017-09-01 14:00",
                    vote: 0
                }]
            })
        }, 1000)
    }
    conponentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer); //清除计时器
        }
    }
    handleVote(id) {
        //根据帖子id进行过滤,找到待修改vote属性的帖子，返回新的posts对象
        const posts = this.state.posts.map(item => {
            const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
            return newItem;
        })
        //使用新的posts对象设置state
        this.setState({
            posts
        });
    }
    //保存帖子
    handleSave(post) {
        //根据post的id，过滤出当前要更新的post
        const posts = this.state.posts.map(item => {
            const newItem = item.id === post.id ? post : item;
            return newItem;
        })
        this.setState({
            posts
        })
    }
    render() {
        return (
            <div className='container'>
                <h2>帖子列表</h2>
                <ul>
                    { this.state.posts.map( item => 
                        /*将id赋值给key属性，作为唯一标识*/
                        <PostItem
                            key = { item.id }
                            post = { item }
                            onVote = { this.handleVote }
                            onSave = { this.handleSave }
                        />
                    )}
                </ul>
            </div>
        )
    }
}
export default PostList;