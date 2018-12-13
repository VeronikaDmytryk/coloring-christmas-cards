import React from "react"

export class FirstScreen extends React.Component {
    constructor(props) {
        super();
        this.state = {
            currentColor: "rgb(9, 255, 252)",
            chosenImage: ""
        }
        this.coloredImages = ["bear_1.svg", "deer_2.svg", "sloth_3.svg", "christmas_tree_4.svg", "snowman_deer_trees_5.svg", "bear_santa_snowman_6.svg", "elf_deer_squirrel_santa_7.svg"];
    }

    chooseImage = (e) => {
        let imageName = e.target.alt;
        this.props.chooseImage(imageName);
    }

    componentDidMount() {
        window.addEventListener("resize", this.onScreenResize)
    }

    showImages = () => {
        var images = [];
        for (let i = 0; i < this.coloredImages.length; i++) {
            images.push(<div className="col-xs-12 col-md-6 col-lg-4" key={i}><img className="cards" onClick={this.chooseImage} src={"../../app/assets/colored/" + this.coloredImages[i]} alt={this.coloredImages[i]} /></div>);
        }
        return images;
    }

    render() {
        return (
            <div className="mainscreen clearfix">
                <div className="container">
                    <h1 className="title">Merry Christmas</h1>
                    <p className="description">I prepared some beautiful christmas cards for you. You can pick one and color it as you like. You can save colored card to your computer, share it on social media or send it by email to your friend!</p>
                    <div className="row">
                        {this.showImages()}
                    </div>
                </div >
            </div>
        );
    };
}