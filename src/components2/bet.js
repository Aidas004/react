import {createRef} from "react";
const Bet = () => {
    const getInput = createRef()
    function getInfo () {
        console.log(betInput.current.value)
    }
    return (
        <div>
            <input ref={betInput} type="text"/>
            <button onClick={getInfo}>bet</button>
        </div>
    );
};

export default Bet;
