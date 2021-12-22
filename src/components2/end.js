import React from 'react';

const End = ({ points, reload }) => {
    const texts = {
        gameOver: "Game Over!",
        congrats: "Congrats!",
        playAgain: "Play Again",
        tryAgain: "Try Again"
    }
    let h1text;
    let btnText;
    if (points >= 5) {
        h1text = texts.congrats
        btnText = texts.playAgain
    } else {
            h1text = texts.gameOver
        btnText = texts.tryAgain
        }

    return (
        <div>
            <div className="quiz">
                <div>
                    <h1>{h1text}</h1>
                    <div className="question">You did {points} out of 5!</div>
                </div>
                <div className="answers">
                    <button onClick={reload} className="btn">{btnText}</button>
                </div>
            </div>
        </div>
    );
};

export default End;
