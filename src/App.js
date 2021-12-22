import './App.css'
import Menu from "./components/menu";
import Game from "./components/game";
import {useState} from "react";


const products = [

    ]
function App () {
    const [getColor, setColor] = useState("")
    const [getText, setText] = useState("")


    function change(color, text) {
        setColor(color)
        setText(text)
    }


    return (
        <div className="App">
            <div className="menuDiv">
                <Menu text={getText} color={getColor}/>
            </div>
            <div className="gameDiv">
                <Game clicked={change} text="my cat is black" color="red"/>
                <Game clicked={change} text="i have dog" color="lightgreen"/>
                <Game clicked={change} text="i like trains" color="lightblue"/>
            </div>
        </div>
    )
}
export default App
