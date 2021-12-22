import React from 'react';

const Start = ({onClick}) => {
    return (
        <div>
            <div className="quiz">
                <div>
                    <h1>Take the quiz.</h1>
                    <div className="question">Whenever, you want.</div>
                </div>
                <div className="answers">
                    <button onClick={onClick} className="btn">Begin</button>
                </div>
            </div>
        </div>
    );
};

export default Start;
