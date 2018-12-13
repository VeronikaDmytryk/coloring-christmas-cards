import React from "react"

export class Retry extends React.Component {

    refreshPage(){
        window.location.href="/";
    }

    render() {
        return (
            <div>
                <button title="Choose another card" onClick={this.refreshPage} className="shareButton" id="retryButton"><i className="fa fa-undo"></i></button>
            </div>
        )
    }
}