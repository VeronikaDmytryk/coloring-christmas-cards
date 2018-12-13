import React from "react"

export class Audio extends React.Component {
    constructor(props) {
        super();
        this.state = {
            playing: true
        }
    }

    playOrStop = () => {
        let player = document.getElementById('player');
        let playButton = document.getElementById('playButton');
        let playButtonIcon = playButton.children[0];
        if (this.state.playing) {
            playButtonIcon.classList.remove("fa-pause");
            playButtonIcon.classList.add("fa-play");
            playButton.classList.remove("swing");
            player.pause();
        } else {
            playButtonIcon.classList.remove("fa-play");
            playButtonIcon.classList.add("fa-pause");
            playButton.classList.add("swing");
            player.play();
        }
        this.setState(prevState => ({
            playing: !prevState.playing
        }));
    }

    render() {
        return (
            <div>
                <button title="Music button" id="playButton" className="swing audioButton shareButton" onClick={this.playOrStop}><i className="fa fa-pause" aria-hidden="true"></i></button>
                <audio autoPlay={!this.state.playing} muted={this.state.muted} id="player">
                    <source src="app/assets/song.mp3" type="audio/mpeg"></source>
                    Your browser does not support the audio element.
                </audio>
            </div>
        )
    }
}