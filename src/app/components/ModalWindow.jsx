import React from "react"

export class ModalWindow extends React.Component {
    constructor(props) {
        super();
        this.state = {
            open: true
        }
    }

    render() {
        if (this.state.open){
            return (
                <div id="modalWindow">
                    <h1 className="modal_title">Title</h1>
                    <p className="modal_description">Type something here</p>
                    <input className="modal_input" type="text" placeholder="Happy holidays!"/>
                    <img className="modal_thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKG4bqdfyHsuzQ_OTnCEBJFI2d1t3lVnKjy5qpz9YZPJiCfan9" alt="christmas-card"/>
                    <button>Cancel</button>
                    <button>Send</button>
                </div>
            );
        }
    };
}