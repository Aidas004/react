import React from 'react';

const Quiz = ({ answer, onClick, question}) => {
    return (
        <div>
            <div className="quiz">
                <div>
                    <div className="question">{question}</div>
                </div>
                <div className="answers">
                    <button onClick={() => onClick(0)} className="btn">{answer[0]}</button>
                    <button onClick={() => onClick(1)} className="btn">{answer[1]}</button>
                    <button onClick={() => onClick(2)} className="btn">{answer[2]}</button>
                    <button onClick={() => onClick(3)} className="btn">{answer[3]}</button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
