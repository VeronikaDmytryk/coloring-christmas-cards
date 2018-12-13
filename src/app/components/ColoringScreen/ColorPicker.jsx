import React from "react"

export class ColorPicker extends React.Component {
    constructor(props) {
        super();
        this.state = {
            color: props.color,
            pickerPosition_x: 75,
            pickerPosition_y: (window.innerHeight - 60) / 2,
            height: window.innerHeight
        }
        this.width = 150;
        this.context;
        this.isMouseDown = false;
    }

    componentDidMount() {
        this.draw();
        this.listenForEvents();
    }

    changeColor = (newColor) => {
        this.props.changeColor(newColor);
    }

    draw() {
        this.context = document.getElementById("color-picker").getContext("2d");
        let gradient = this.context.createLinearGradient(0, 0, 0, this.state.height - 60);
        //Color Stops
        gradient.addColorStop(0, "rgb(255, 0, 0)");
        gradient.addColorStop(0.15, "rgb(255, 0, 255)");
        gradient.addColorStop(0.33, "rgb(0, 0, 255)");
        gradient.addColorStop(0.49, "rgb(0, 255, 255)");
        gradient.addColorStop(0.67, "rgb(0, 255, 0)");
        gradient.addColorStop(0.84, "rgb(255, 255, 0)");
        gradient.addColorStop(1, "rgb(255, 0, 0)");
        //Fill it
        this.context.fillStyle = gradient;
        this.context.fillRect(0, 0, this.width, this.state.height - 60);

        // //Apply black and white 
        gradient = this.context.createLinearGradient(this.width, 0, 0, 0 );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
        this.context.fillStyle = gradient;
        this.context.fillRect(0, 0, this.width, this.state.height - 60);
    }

    onMouseDown = (e) => {
        if (e.target.id == "color-picker") {
            e.preventDefault();
            let currentX = e.clientX - document.getElementById("color-picker").offsetLeft;
            let currentY = e.clientY - document.getElementById("color-picker").offsetTop;
            this.isMouseDown = true;
            this.setState((state, props) => ({
                pickerPosition_x: currentX,
                pickerPosition_y: currentY,
            }));
            this.draw();
            this.getPickedColor();
        }
    }

    onMouseMove = (e) => {
        if (e.target.id == "color-picker") {
            if (this.isMouseDown) {
                let currentX = e.clientX - document.getElementById("color-picker").offsetLeft;
                let currentY = e.clientY - document.getElementById("color-picker").offsetTop;
                this.setState((state, props) => ({
                    pickerPosition_x: currentX,
                    pickerPosition_y: currentY,
                }));
                this.draw();
                this.getPickedColor();
            }
        }

    }

    onMouseUp = () => {
        this.isMouseDown = false;
    }

    listenForEvents = () => {
        //Register 
        document.addEventListener("mousedown", this.onMouseDown);
        document.addEventListener("mousemove", this.onMouseMove);
        document.addEventListener("mouseup", this.onMouseUp);
        window.addEventListener("resize", this.onScreenResize);
    }

    getPickedColor() {
        let imageData = this.context.getImageData(this.state.pickerPosition_x, this.state.pickerPosition_y, 1, 1);
        let newColor=`rgb(${imageData.data[0]}, ${imageData.data[1]}, ${imageData.data[2]})`;
        this.setState((state, props) => ({
            color: newColor
        }));
        this.changeColor(newColor);
    }

    onScreenResize = (e) => {
        this.setState((state, props) => ({
            height: window.innerHeight
        }));
        this.draw();
    }
    
    render() {
        let pinPosition = {
            left: this.state.pickerPosition_x - 25,
            top: this.state.pickerPosition_y - 63,
        }
        let height = this.state.height - 60;
        return (
            <div className="wraper">
                <canvas id="color-picker" height={height} width={this.width} ></canvas>
                <div className="indicator" style={pinPosition}>
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 190 238"
                        style={{ enableBackground: "new 0 0 190 238" }}
                        xmlSpace="preserve"
                    >
                        <path
                            id="XMLID_1_"
                            d="M188.5 93.6C188.5 42 146.6.1 95 .1S1.5 42 1.5 93.6c2.5 62 60.5 113 93.5 144 27.5-26 93.5-82 93.5-144z"
                        />
                        <circle className="color-circle" cx={95} cy="93.6" r="77.3" fill={this.state.color}/>
                        <path d="M130.5,75.2c-4.5,1.8-7.4,6.1-7.4,6.1l0,0c-2.5-3.2-5.5-6-8.7-8.2c1.5-3.4,4-7.2,7.4-12.4c0.6-0.9,1.2-1.9,1.9-3
                            c11.8-18.4,2.8-29.7,2.4-30.2c-1.1-1.4-3.1-1.6-4.5-0.5c-1.4,1.1-1.6,3.1-0.5,4.5c0.3,0.3,6.3,8.5-2.8,22.7c-0.7,1-1.3,2-1.9,2.9
                            c-0.1,0.1-0.2,0.3-0.3,0.4c-1.1-1.1-2.7-2.6-4.2-4.3c-2.8-3-4.6-7.5-4.6-7.6c-0.6-1.4-2.2-2.1-3.6-1.5c-1.4,0.6-2.1,2.2-1.5,3.6
                            c0.1,0.2,2.2,5.4,5.6,9.2c2.1,2.3,4.1,4.2,5.3,5.3c-1.7,2.8-3.2,5.3-4.3,7.6c-4.3-1.9-8.9-3-13.8-3c-3.6,0-7.1,0.6-10.5,1.7
                            c-1-2-2.2-4.1-3.7-6.3c1.2-1.1,3.2-3.1,5.3-5.3c3.4-3.8,5.6-9,5.6-9.2c0.6-1.4-0.1-3-1.5-3.6c-1.4-0.6-3,0.1-3.6,1.5
                            c0,0-1.8,4.5-4.6,7.6c-1.5,1.7-3.1,3.2-4.2,4.3c-0.1-0.1-0.2-0.3-0.3-0.4c-0.6-0.9-1.2-1.9-1.9-2.9c-9.2-14.2-3.2-22.4-2.8-22.7
                            c1.1-1.4,0.9-3.3-0.5-4.5c-1.4-1.1-3.4-0.9-4.5,0.4c-0.4,0.5-9.4,11.8,2.4,30.2c0.7,1,1.3,2,1.9,3c2.8,4.3,4.9,7.6,6.5,10.5
                            c-4.6,2.5-8.7,6.1-12,10.4c0,0-2.8-4.3-7.2-6.1c-6.2-2.5-15.4,0.4-15.4,0.4s1.8,11.5,5.6,14.7c3.1,2.7,10,4,10,4l0,0
                            c-1.7,5-2.6,10.4-2.6,16c0,19.4,17,43.7,37.9,43.7c20.9,0,37.9-25.5,37.9-43.7c0-5.8-1-11.3-2.8-16.4c0,0,6.9-1.3,10-4
                            c3.8-3.3,5.6-14.7,5.6-14.7S136.7,72.7,130.5,75.2z M81.1,114c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3s3.3,1.5,3.3,3.3
                            S83,114,81.1,114z M95.1,134.8c-3.3,0-8.1-1.9-8.1-5.9c0-3.9,4.8-5.9,8.1-5.9c3.3,0,7.9,2.2,7.9,5.9
                            C102.9,133,98.3,134.8,95.1,134.8z M109.3,114c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3c1.8,0,3.3,1.5,3.3,3.3S111.2,114,109.3,114z"
                        />
                    </svg>
                </div>
            </div>
        )
    }
}