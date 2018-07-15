import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username}</span>:
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-delete'>
                    删除
                </span>
            </div>
        )

    }
}
export default Comment