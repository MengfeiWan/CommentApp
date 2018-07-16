import React, { Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }
    constructor () {
        super()
        this.state = { timeString: '' }
      }
    
    handleDeleteComment = () => {
        if (this.props.onDeleteComment)
            this.props.onDeleteComment(this.props.index)
    }
    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username}</span>:
                </div>
                <p>{this.props.comment.content}</p>
                <span onClick={this.handleDeleteComment}
                    className='comment-delete'>
                    删除
                </span>
            </div>
        )

    }
}
export default Comment