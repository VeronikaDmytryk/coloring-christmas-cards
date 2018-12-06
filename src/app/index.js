import React from "react"
import { render } from "react-dom"
import styles from "./styles.css"
import { ColoringArea } from "./components/ColoringScreen/ColoringArea.jsx"
import { Footer } from "./components/Footer.jsx"
import { ColorPicker } from "./components/ColoringScreen/ColorPicker.jsx"
// import Image1 from "./assets/uncolored/1_bear.svg"

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <ColorPicker />
                <Footer />
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));