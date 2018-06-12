import React, {Component} from 'react';

import Comments from './Comments'
class AtricleLinks extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
        }
    }
    render() {
        return (
            <div className="article-links">
                <button className="article-link" href="#" onClick={() => this.showComments()}>
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </button>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
                {this.state.isVisible ? <Comments />: null}
            </div>
        )
    }

    showComments() {
        this.setState({isVisible:  (this.state.isVisible ? false : true)});
    }

}

export default AtricleLinks;