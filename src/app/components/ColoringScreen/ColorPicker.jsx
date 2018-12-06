import React from "react"

export class ColorPicker extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "rgb(9, 255, 252)",
            pickerCircle_x: window.innerWidth / 2,
            pickerCircle_y: 100,
            pickerCircle_width: 10,
            pickerCircle_height: 10,
            width: window.innerWidth
        }
        this.height = 200;
        //Get context 
        this.context;
        //Circle 

    }

    componentDidMount() {
        this.draw();
        this.listenForEvents();
    }

    draw() {
        this.context = document.getElementById("color-picker").getContext("2d");
        let gradient = this.context.createLinearGradient(0, 0, this.state.width, 0);
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
        this.context.fillRect(0, 0, this.state.width, this.height);

        // //Apply black and white 
        gradient = this.context.createLinearGradient(0, 0, 0, this.height);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
        this.context.fillStyle = gradient;
        this.context.fillRect(0, 0, this.state.width, this.height);

        // //Circle 
        // this.context.beginPath();
        // this.context.arc(this.state.pickerCircle_x, this.state.pickerCircle_y, this.state.pickerCircle_width, 0, Math.PI * 2);
        // this.context.strokeStyle = "black";
        // this.context.stroke();
        // this.context.closePath();
    }

    listenForEvents() {
        let isMouseDown = false;
        const onMouseDown = (e) => {
            if (e.target.id == "color-picker") {

                let currentX = e.clientX - document.getElementById("color-picker").offsetLeft;
                let currentY = e.clientY - document.getElementById("color-picker").offsetTop;
                isMouseDown = true;

                this.setState((state, props) => ({
                    pickerCircle_x: currentX,
                    pickerCircle_y: currentY,
                }));
                this.draw();
                this.getPickedColor();
            }
        }

        const onMouseMove = (e) => {
            if (e.target.id == "color-picker") {
                if (isMouseDown) {
                    let currentX = e.clientX - document.getElementById("color-picker").offsetLeft;
                    let currentY = e.clientY - document.getElementById("color-picker").offsetTop;
                    this.setState((state, props) => ({
                        pickerCircle_x: currentX,
                        pickerCircle_y: currentY,
                    }));
                    this.draw();
                    this.getPickedColor();
                }
            }

        }

        const onScreenWidthChange = (e) => {
            this.setState((state, props) => ({
                width: window.innerWidth
            }));
            this.draw();
            this.getPickedColor();
        }

        const onMouseUp = () => {
            isMouseDown = false;
        }

        //Register 
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
        window.addEventListener("resize", onScreenWidthChange)
    }

    getPickedColor() {
        let imageData = this.context.getImageData(this.state.pickerCircle_x, this.state.pickerCircle_y, 1, 1);
        this.setState((state, props) => ({
            color: `rgb(${imageData.data[0]}, ${imageData.data[1]}, ${imageData.data[2]})`
        }));
    }

    render() {
        let pinPosition = {
            bottom: this.height - this.state.pickerCircle_y + 57,
            left: this.state.pickerCircle_x - 25,
        }
        return (
            <div className="wraper">
                <canvas id="color-picker" height={this.height} width={this.state.width} ></canvas>
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
                        <circle className="st0" cx={95} cy="93.6" r="77.3" fill={this.state.color} stroke="white" strokeWidth="2" />
                        <path stroke="white" strokeWidth="1" d="M130.5 75.2c-4.5 1.8-7.4 6.1-7.4 6.1-2.5-3.2-5.5-6-8.7-8.2 1.5-3.4 4-7.2 7.4-12.4.6-.9 1.2-1.9 1.9-3 11.8-18.4 2.8-29.7 2.4-30.2-1.1-1.4-3.1-1.6-4.5-.5s-1.6 3.1-.5 4.5c.3.3 6.3 8.5-2.8 22.7-.7 1-1.3 2-1.9 2.9-.1.1-.2.3-.3.4-1.1-1.1-2.7-2.6-4.2-4.3-2.8-3-4.6-7.5-4.6-7.6-.6-1.4-2.2-2.1-3.6-1.5-1.4.6-2.1 2.2-1.5 3.6.1.2 2.2 5.4 5.6 9.2 2.1 2.3 4.1 4.2 5.3 5.3-1.7 2.8-3.2 5.3-4.3 7.6-4.3-1.9-8.9-3-13.8-3-3.6 0-7.1.6-10.5 1.7-1-2-2.2-4.1-3.7-6.3 1.2-1.1 3.2-3.1 5.3-5.3 3.4-3.8 5.6-9 5.6-9.2.6-1.4-.1-3-1.5-3.6-1.4-.6-3 .1-3.6 1.5 0 0-1.8 4.5-4.6 7.6-1.5 1.7-3.1 3.2-4.2 4.3-.1-.1-.2-.3-.3-.4-.6-.9-1.2-1.9-1.9-2.9-9.2-14.2-3.2-22.4-2.8-22.7 1.1-1.4.9-3.3-.5-4.5-1.4-1.1-3.4-.9-4.5.4-.4.5-9.4 11.8 2.4 30.2.7 1 1.3 2 1.9 3 2.8 4.3 4.9 7.6 6.5 10.5-4.6 2.5-8.7 6.1-12 10.4 0 0-2.8-4.3-7.2-6.1-6.2-2.5-15.4.4-15.4.4s1.8 11.5 5.6 14.7c3.1 2.7 10 4 10 4-1.7 5-2.6 10.4-2.6 16 0 19.4 17 43.7 37.9 43.7s37.9-25.5 37.9-43.7c0-5.8-1-11.3-2.8-16.4 0 0 6.9-1.3 10-4 3.8-3.3 5.6-14.7 5.6-14.7s-8.9-2.7-15.1-.2zm-35.4 59.6c-3.3 0-8.1-1.9-8.1-5.9 0-3.9 4.8-5.9 8.1-5.9s7.9 2.2 7.9 5.9c-.1 4.1-4.7 5.9-7.9 5.9z" />
                        <circle className="st1" fill="#fff" cx="81.1" cy="110.7" r="3.3" />
                        <circle className="st1" fill="#fff" cx="109.3" cy="110.7" r="3.3" />
                    </svg>
                </div>
            </div>
        )
    }
}