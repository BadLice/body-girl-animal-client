
import React from 'react';
import Hand from './hand'

export default props => {

    return (
        <>
            {
                props.hands.map(
                    (hand, i) =>
                        <tr key={i} className="text-center align-middle">
                            <Hand hand={hand} setInputScore={props.setInputScore} setInputValue={props.setInputValue} confirmHand={props.confirmHand} submitHand={props.submitHand}/>
                        </tr>
                )
            }
        </>
    );
}
