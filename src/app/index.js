import React from "react"
import { render } from "react-dom"
import styles from "./styles.css"
import { MainArea } from "./components/MainArea.jsx"
import { Footer } from "./components/Footer.jsx"

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <MainArea />
                <Footer />
            </div>
        );
    }
}

render(<App />, window.document.getElementById("app"));