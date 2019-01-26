import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Image from "./components/Image";
import images from "./images.json";

class App extends React.Component {
    state = {
        score: 0,
        highscore: 0,
        images: images,
        clicked: [false, false, false, false, false, false, false, false, false, false, false, false],
        message: "Click an image to begin!",
        messageclass: "nav-inst",
        gameclass: "photos"
    };
    handleClick = (id) => {
        let newScore = this.state.score;
        let newHighscore = this.state.highscore;
        let newClicked = this.state.clicked;
        let newMessage = this.state.message;
        let newMessageClass = this.state.messageclass;
        let newGameClass = this.state.gameclass;
        if (!this.state.clicked[id]) {
            newScore = newScore + 1;
            if (newScore > this.state.highscore) {
                newHighscore = newScore;
            }
            if (newScore === 12) {
                newScore = 0;
                newClicked = [false, false, false, false, false, false, false, false, false, false, false, false];
                newMessage = "You won!";
                newMessageClass = ((newMessageClass === "nav-correct1") ? "nav-correct2" : "nav-correct1");
                newGameClass = "photos shakediv";
            }
            else {
                newClicked[id] = true;
                newMessage = "You guessed correctly!";
                newMessageClass = ((newMessageClass === "nav-correct1") ? "nav-correct2" : "nav-correct1");
                newGameClass = "photos";
            }
        }
        else {
            newScore = 0;
            newClicked = [false, false, false, false, false, false, false, false, false, false, false, false];
            newMessage = "You guessed incorrectly!";
            newMessageClass = "nav-incorrect";
            newGameClass = "photos shakediv"
        }
        this.shuffle(this.state.images);
        this.setState({
            score: newScore,
            highscore: newHighscore,
            clicked: newClicked,
            message: newMessage,
            messageclass: newMessageClass,
            gameclass: newGameClass
        });
    };
    shuffle = (array) => {
        var currentIndex = array.length;
        var temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    render() {
        return (
            <div className="container">
                <Navbar messageClass={this.state.messageclass} message={this.state.message} score={this.state.score} highscore={this.state.highscore} />
                <Jumbotron />
                <div className={this.state.gameclass}>
                    {this.state.images.map(image => (<Image key={image.id.toString()} id={image.id} src={image.image} name={image.name} handleClick={this.handleClick} />))}
                </div>
            </div>
        );
    }
};

export default App;
