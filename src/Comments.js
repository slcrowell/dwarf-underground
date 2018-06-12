import React, {Component} from 'react';


class Comments extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={() => this.addComment()}>
                    <input type='text' name='comment'></input>
                    <input type='submit'></input>
                </form>
                <ul></ul>   
            </div>
        )
    }

    addComment() {
        
    }

}

export default Comments;