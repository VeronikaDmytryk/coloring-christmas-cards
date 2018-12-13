import React from "react";
import { FirstScreen } from "./FirstScreen/FirstScreen.jsx"
import { ColoringArea } from "./ColoringScreen/ColoringArea.jsx"
import Image1 from "../assets/uncolored/bear_1.svg"
import Image2 from "../assets/uncolored/deer_2.svg"
import Image3 from "../assets/uncolored/sloth_3.svg"
import Image4 from "../assets/uncolored/christmas_tree_4.svg"
import Image5 from "../assets/uncolored/snowman_deer_trees_5.svg"
import Image6 from "../assets/uncolored/bear_santa_snowman_6.svg"
import Image7 from "../assets/uncolored/elf_deer_squirrel_santa_7.svg"

export class MainArea extends React.Component {
    constructor() {
        super();
        this.state = {
            firstScreenShown: true,
            coloringAreaShown: false,
            imageName: ""
        }
    }

    chooseImage = (imageName) => {
        this.setState({
            firstScreenShown: false,
            coloringAreaShown: true,
            imageName: imageName
        });
    }

    render() {
        return (
            <div>
                {this.state.firstScreenShown ?
                    <FirstScreen chooseImage={this.chooseImage} /> :
                    null
                }
                {this.state.coloringAreaShown ?
                    <ColoringArea imageName={this.state.imageName} /> :
                    null
                }
            </div>
        );
    }
}

