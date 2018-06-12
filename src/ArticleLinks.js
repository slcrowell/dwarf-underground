import React, {Component} from 'react';

import Comments from './Comments'
class AtricleLinks extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: 'inline',
        }
    }
    render() {
        return (
            <div className="article-links">
                <a className="article-link" href="#" onClick={(e) => this.showComments(e)}>
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
                <Comments />
            </div>
        )
    }

    showComments(e) {
        e.preventDefault();
        this.setState({isVisible:  (this.state.isVisible == 'inline' ? 'none' : 'inline')});
        document.querySelector('.comments').style.display = this.state.isVisible;
    }

}

export default AtricleLinks;