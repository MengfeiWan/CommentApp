import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
class CommentList extends Component {
    static propTypes={
        onDeleteComment: PropTypes.func,
        comments: PropTypes.array
    }
    static defaultProps = {
        comments: []
      }
      handleDeleteComment=(index)=>{
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
      }
    render() {
        const comments = [
            { username: 'Jerry', content: 'Hello' },
            { username: 'Tomy', content: 'World' },
            { username: 'Lucy', content: 'Good' }
        ]
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment
                     comment={comment}
                     key={i}
                     index={i}
                    onDeleteComment={this.handleDeleteComment}
                      />
                )}
            </div>
        )
    }
}
export default CommentList