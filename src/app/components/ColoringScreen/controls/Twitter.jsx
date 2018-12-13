import React from "react"

export class TwitterButton extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <button title="Share on Twitter" className="shareButton" id="twitterButton"><i className="fa fa-twitter"></i></button>
            </div>
        )
    }
}