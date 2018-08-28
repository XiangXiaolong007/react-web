import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./PostItem.css";
import like from "./images/like-default.png";
// class PostItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             vote: 0
//         };
//     }
//     //处理点赞逻辑
//     handleClick() {
//         let vote = this.state.vote;
//         vote++;
//         this.setState({
//             vote: vote
//         })
//     }
//     render() {
//         const { title, author, date } = this.props;
//         return (
//             <li>
//                 <div>
//                     {title}
//                 </div>
//                 <div>
//                     创建人：<span>{author}</span>
//                 </div>
//                 <div>
//                     创建时间：<span>{date}</span>
//                 </div>
//                 <div>
//                     <button
//                         onClick={ () => {
//                             this.handleClick();
//                         }}
//                     >
//                         点赞
//                     </button>
//                     &nbsp;
//                     <span>
//                         {this.state.vote}
//                     </span>
//                 </div>
//             </li>
//         ) 
//     }
// }

function PostItem(props) {
    const handleClick = () => {
        props.onVote(props.post.id);
    };
    const { post } = props;
    return (
        <li className='item'>
            <div className='title'>
                { post.title }
            </div>
            <div>
                创建人：<span>{ post.author }</span>
            </div>
            <div>
                创建时间：<span>{ post.date }</span>
            </div>
            <div>
                <span><img src={like} onClick={handleClick}/></span>
                &nbsp;
                <span>{ post.vote }</span>
            </div>
        </li>
    )
}
PostItem.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string,
        vote: PropTypes.number
    }).isRequired,
    onVote: PropTypes.func.isRequired
}
export default PostItem;