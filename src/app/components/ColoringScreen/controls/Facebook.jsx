import React from "react"

export class FacebookButton extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }

    shareOnFacebook = () => {
        FB.ui({
            method: 'share',
            mobile_iframe: true,
            href: 'https://developers.facebook.com/docs/',
          }, function(response){});
    }

    render() {
        return (
            <div>
                <button title="Share on Facebook" className="shareButton" id="facebookButton" onClick={this.shareOnFacebook}><i className="fa fa-facebook"></i></button>
            </div>
        )
    }
}