import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    componentWillMount(){
        console.log('l')
       this._loadComments()
       
    }
    _saveComments=(comments)=>{
        // console.log(comments)
        // console.log(JSON.stringify(comments))
        localStorage.setItem('comments',JSON.stringify(comments))
        //console.log(localStorage.getItem('comments'))
    }
    _loadComments=()=>{
        let comments=localStorage.getItem('comments')
        console.log(comments)
        if(comments){
           comments= JSON.parse(comments)
           //console.log(comments)
         this.setState({comments})
         }
    }
    handleSubmitComment = (comment) => {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        const comments=this.state.comments
        this.setState({
            commments: this.state.comments
        })
        this._saveComments(comments)
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp