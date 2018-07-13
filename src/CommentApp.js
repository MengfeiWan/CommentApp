import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor(){
        super()
        this.state={
            comment:[]
        }
    }
    handleSubmitComment = (comment) => console.log(comment)

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                 //
                    onSubmit={this.handleSubmitComment} /> 
                <CommentList comments={this.} />
            </div>
        )
    }
}

export default CommentApp