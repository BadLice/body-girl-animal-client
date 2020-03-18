import React from 'react';
import { Alert } from 'react-bootstrap';

export default props => {

    let totalScore = props.hands.reduce((tot, hand) => tot + hand.inputs.reduce((tot, input) => tot + input.score, 0), 0);

    return (
        <>
            <footer className="w-100 p-1 bg-dark text-white fixed-bottom">
                <Alert variant="primary" className="float-right m-0">
                    {totalScore}
                </Alert>
                <Alert variant="none" className="float-right m-0">
                    TOTAL
                </Alert>
            </footer>
        </>
    );
}
