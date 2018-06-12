import React, {Component} from 'react';

class Comment extends Component {
    render() {
      return <li>{this.props.comment}</li>
    }
}

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            newComment: '',
        }
    }
    render() {
        return (
            <div className='comments'>
                <form onSubmit={(e) => this.addComment(e)}>
                    <input type='text' value={this.state.newComment} placeholder='Enter your comment' onChange={(e) => this.handleChange(e)}></input>
                    <input type='submit'></input>
                </form>
                <ul>{this.state.comments.map(comment => <Comment comment={comment}/>)}</ul>   
            </div>
        )
    }

    handleChange(event) {
        this.setState({newComment: event.target.value});
    }

    addComment(e) {
        e.preventDefault();
        const comments = [...this.state.comments];
        comments.push(this.state.newComment);
        this.setState({comments});
        this.setState({newComment: ''});
    }

}

export default Comments;