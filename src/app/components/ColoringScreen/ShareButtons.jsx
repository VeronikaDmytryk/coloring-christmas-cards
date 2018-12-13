import React from "react"
import Cord from "../../assets/cord.svg"
import { Audio } from "./controls/Audio.jsx"
import { SaveButton } from "./controls/Save.jsx"
import { FacebookButton } from "./controls/Facebook.jsx"
import { TwitterButton } from "./controls/Twitter.jsx"
import { Retry } from "./controls/Retry.jsx"

export class ShareButtons extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="shareButtons">
                <Audio />
                <Retry />
                <FacebookButton />
                <TwitterButton />
                <SaveButton />
                <Cord className="cord" />
            </div>
        )
    }
}