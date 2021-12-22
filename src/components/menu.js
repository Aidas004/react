import React from "react";
function Menu (props) {
    return (
        <div className="start">
           <div style={{background: props.color}} className="comp1">
               <h1>{props.text}</h1>
           </div>
        </div>
    )
}
export default Menu