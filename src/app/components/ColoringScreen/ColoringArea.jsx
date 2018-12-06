import React from "react"

export class ColoringArea extends React.Component {
    constructor(props) {
        super();
        this.state = {
            color: "red"
        }
    }

    colorElement = (event, color) => {
        console.log(event.target.tagName);
        let tagName = event.target.tagName;
        if (tagName == "path" || tagName == "rect" || tagName == "circle" || tagName == "polygon" || tagName == "ellipse" || tagName == "text") {
            event.target.style.fill = this.state.color;
        }
    }

    render() {
        return (
            <div className="container">
                <div id="myPicture" onClick={()=> this.colorElement(event)}>
                    {this.props}
                </div>                
            </div >
        );
    };
}