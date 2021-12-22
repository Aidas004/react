import React from "react";
function Game (props) {
    return (
        <div className="start">
            <div onClick={ () => props.clicked(props.color, props.text)} style={{background: props.color}} className="comp1">
                <h1>{props.text}</h1>
            </div>
        </div>
    )
}
export default Game