import React from 'react';
import UserInput from './user.input'
import ConfirmButton from './confirm.button'
import { Spinner } from 'react-bootstrap';

export default props => {
    let handTotalScore = props.hand.inputs.reduce((tot, input) => tot + input.score, 0)

    return (
        <>
            <td className="align-middle">
                {
                    props.showSpinner ? 
                    <Spinner animation="grow" variant="success" className="float-left"/>
                    : <></>
                }
                {props.hand.character}
                </td>
            {
                props.hand.inputs.map((input, j) =>
                    <UserInput key={j} index={j} handId={props.hand.id} character={props.hand.character} input={input} handState={props.hand.state} setInputScore={props.setInputScore} setInputValue={props.setInputValue} state={props.hand.state}/>
                )
            }
            <ConfirmButton hand={props.hand} confirmHand={props.confirmHand} submitHand={props.submitHand}/>
            <td className="align-middle">{handTotalScore}</td>
        </>
    );
}
