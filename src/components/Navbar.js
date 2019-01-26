import React from "react";

function Navbar(props) {
    return (
        <nav className="container">
            <h1 className="title">Clicky Game</h1>
            <h2 className={props.messageClass}>{props.message}</h2>
            <h2>Score: <span className="score">{props.score}</span> | Top Score: <span className="top">{props.highscore}</span></h2>
        </nav>
    );
}

export default Navbar;
