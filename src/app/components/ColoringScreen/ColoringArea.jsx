import React from "react"
import { ColorPicker } from "./ColorPicker.jsx"
import { ShareButtons } from "./ShareButtons.jsx"
import canvg from "canvg"

export class ColoringArea extends React.Component {
    constructor(props) {
        super();
        this.state = {
            currentColor: "rgb(9, 255, 252)",
            currentPictureUploaded: false
        }
    }


    componentDidMount = () => {
        import("../../assets/uncolored/" + this.props.imageName)
            .then(picture => this.setState({
                currentPictureUploaded: true,
                picture: picture.default
            }));
    }

    changeColor = (newColor) => {
        this.setState((state, props) => ({
            currentColor: newColor
        }));
    }

    colorElement = (event) => {
        let tagName = event.target.tagName;
        if (tagName == "path" || tagName == "rect" || tagName == "circle" || tagName == "polygon" || tagName == "ellipse" || tagName == "text") {
            event.target.style.fill = this.state.currentColor;
            this.svgToCanvasToImg();
        }
    }

    svgToCanvasToImg = () => {
        canvg(document.getElementById('canv'), document.getElementById("myPicture").innerHTML);
    }

    render() {
        const Image = this.state.picture;
        return (
            <div className="mainscreen clearfix">
                <ColorPicker color={this.state.currentColor} onScreenResize={this.onScreenResize} changeColor={this.changeColor} />
                <ShareButtons />
                <div id="myPicture" onClick={() => this.colorElement(event)}>
                    {(Image)? <Image />: null}
                </div>
                <canvas id="canv" width="1200px" height="900px"></canvas>
            </div >
        );

    };
}