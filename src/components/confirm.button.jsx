
import React from 'react';
import { Button } from 'react-bootstrap';

export default props => {

    let button;

    switch (props.hand.state) {
        case 'playing':
            button = (
                <Button variant="success" onClick={() => props.confirmHand(props.hand.id)}>
                    Confirm
                </Button>
            )
            break;

        case 'waiting':
            button = (
                <Button variant="success" onClick={() => props.confirmHand(props.hand.id)} disabled>
                    Confirmed
                </Button>
            )
            break;

        case 'confirmed':
            button = (
                <Button variant="primary" onClick={() => props.submitHand(props.hand.id)}>
                    Submit
                </Button>
            )
            break;

       default:
            button = (
               <h6>Submitted</h6>
            )
            break;
    }

    return (
        <>
            <td className="align-middle">
                {button}
            </td>
        </>
    );
}
