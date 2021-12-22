import './App2.css'
import Start from "./components2/start";
import Quiz from "./components2/quiz";
import End from "./components2/end";
import {useState} from "react";

function App2 () {
    let quiz = [
        {
            question: "Kuriais metais krikštatėvis buvo išleistas pirmą kartą?",
            answers: ['1993', "1852", "1662", "1972"],
            correct: 3
        },
        {
            question: "Kuris aktorius pelnė geriausią aktoriaus Oskarą už filmus „Filadelfija“ (1993) ir „Forrest Gump“ (1994)?",
            answers: ['Jonas Bulijonas', "Tomas Kukuruzas", "Tom Hanks", "Mikas plikas"],
            correct: 2
        },
        {
            question: "Kiek savarankiškų komizionų padarė Alfredas Hitchcockas savo filmuose 1927–1976 metais - 33, 35 ar 37?",
            answers: ['12', "37", "100", "2"],
            correct: 1
        },
        {
            question: "Kuris 1982 m. Filmas buvo labai gerbėjų sutiktas dėl meilės tarp jauno, tėvo neturinčio priemiesčio berniuko ir pasiklydusio, geranoriško bei namuose gyvenančio svečio iš kitos planetos vaizdavimo?",
            answers: ['IR Nežemiškas', "Gelbėtojai", "Terminatorius", "Titanikas"],
            correct: 0
        },
        {
            question: "Kuri aktorė vaidino Mary Poppins 1964 m. Filme „Mary Poppins“?",
            answers: ['Andželina joly', " Julie Andrews", "Karen Gillan", "Lucy Liu"],
            correct: 1
        }
    ]

    const [getQuiz, setQuiz] = useState(0)
    const [getPoints, setPoints] = useState(0)
    const [getWindow, setWindow] = useState(true)

    const setQ = (x) => {
        if (x === quiz[getQuiz].correct) {
            setPoints(getPoints + 1)
        }
        setQuiz(getQuiz + 1)
        console.log(getPoints)
        console.log(x)
    }

    function reload ()  {
        setWindow(!getWindow)
        setPoints(0)
        setQuiz(0)
    }

    function startGame () {
        setWindow(!getWindow)
    }

    const gameWindow = <>{getQuiz < 5 ? <Quiz onClick={setQ} question={quiz[getQuiz].question} answer={quiz[getQuiz].answers}/> :
        <End reload={reload} points={getPoints}/>}</>

    let window;

    if (getWindow) {
        window = <Start onClick={startGame}/>
    } else (
        window = gameWindow
    )

    return (
        <div className="App">
            {window}
        </div>
    )
}
export default App2
