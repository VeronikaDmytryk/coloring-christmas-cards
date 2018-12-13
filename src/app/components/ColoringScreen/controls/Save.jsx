import React from "react"

export class SaveButton extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }


    downloadImage = () => {
        var a = document.getElementById("saveLink");
        var canvas = document.getElementById("canv");
        var img = canvas.toDataURL("image/jpeg");
        a.href = img;
    }

    render() {
        return (
            <div>
                <a id="saveLink" download="YourFileName.jpg" onClick={this.downloadImage} title="Upload your colored card">
                    <button className="shareButton" id="saveButton"><i className="fa fa-download"></i></button>
                </a>
            </div>
        )
    }
}