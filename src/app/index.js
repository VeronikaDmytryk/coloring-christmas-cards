import React from "react"
import { render } from "react-dom"
import styles from "./styles.css"
import { Footer } from "./components/Footer.jsx"

class App extends React.Component {
    constructor(){
        super();
    }
    render(){
        return <Footer/>;
    }
}

render(<App/>, window.document.getElementById("app"));