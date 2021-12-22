import './App.css';
import {useState} from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";
import Shop from "./components/Shop";


function App() {
    const [getWindowNum, setWindowNum] = useState(1)
    const [getPointsToAdd, setPointsToAdd] = useState(1)
    const [getPoints, setPoints] = useState(1000)
    const [getColor, setColor] = useState("white")
    const [getCookie, setCookie] = useState("https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png")
    const [getSpin, setSpin] = useState(false)

    function change(num) {
        setWindowNum(num)
    }ea

    function addPoints() {
        setPoints(getPoints + getPointsToAdd)
    }

    function buyUpgrade(index) {
        if(index === 1) {
            if(getPoints >= 100) {
                setPointsToAdd(2)
                setPoints(getPoints - 100)
                setWindowNum(2)
            }
        }
        if(index === 2) {
            if(getPoints >= 500) {
                setPointsToAdd(5)
                setPoints(getPoints - 500)
                setWindowNum(2)
            }
        }
        if(index === 3) {
            if(getPoints >= 1000) {
                setPointsToAdd(10)
                setPoints(getPoints - 1000)
                setWindowNum(2)
            }
        }
        if(index === 4) {
            if(getPoints >= 300) {
                setPoints(getPoints - 300)
                setWindowNum(2)
                setColor('#ccdaef')
            }
        }
        if(index === 5) {
            if(getPoints >= 200) {
                setPoints(getPoints - 200)
                setWindowNum(2)
                setCookie("https://cdn.picpng.com/cookie/painting-cookie-26884.png")
            }
        }
        if(index === 6) {
            if(getPoints >= 400) {
                setPoints(getPoints - 400)
                setWindowNum(2)
                setSpin(true)
            }
        }
    }

    return (
        <div className="App" style={{backgroundColor: getColor}}>
            {getWindowNum === 1 && <Menu changeWindow={change}/>}

            {getWindowNum === 2 && <Game changeWindow={change}
                                         cookie={getCookie}
                                         points={getPoints}
                                         spin={getSpin}
                                         cookieClick={addPoints}/>}

            {getWindowNum === 3 && <Shop changeWindow={change} upgrade={buyUpgrade}/>}
        </div>
    );
}

export default App;