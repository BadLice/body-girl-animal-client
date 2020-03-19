import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Table } from 'react-bootstrap';
import Hands from './hands';
import TotalRow from './total.row';
import NavbarGame from './navbar.game'

export default props => {

    let quitGame = () => {
        props.connection.emit('reqQuitGame');
        props.connection.on('getQuitGame', () => props.history.push('/'));
    }

    let setInputScore = (value, handId, inputIndex) => {
        let handIndex = props.hands.findIndex(hand => hand.id === handId)
        let h = [...props.hands];
        h[handIndex].inputs[inputIndex].score = Number(value);

        props.setHands(h);
    }

    let setInputValue = (value, handId, inputIndex) => {
        let handIndex = props.hands.findIndex(hand => hand.id === handId)
        let h = [...props.hands];
        h[handIndex].inputs[inputIndex].value = value;

        props.setHands(h);
    }

    let confirmHand = (handId) => {
        let handIndex = props.hands.findIndex(hand => hand.id === handId)
        let h = [...props.hands];
        h[handIndex].state = 'waiting';

        props.setHands(h);
    }

    let submitHand = (handId) => {
        let handIndex = props.hands.findIndex(hand => hand.id === handId)
        let h = [...props.hands];
        h[handIndex].state = 'submitted';

        props.setHands(h);
    }

    let addHand = (newHand) => {
        let h = [...props.hands];
        h.push(newHand);

        props.setHands(h);
    }

    return (
        <>
            <NavbarGame username={props.username} quitGame={quitGame} />
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>
                        {props.columns.map((c, i) => <th key={i}>{c}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <Hands hands={props.hands} setInputScore={setInputScore} setInputValue={setInputValue} confirmHand={confirmHand} submitHand={submitHand} />
                </tbody>
            </Table >
            <TotalRow columns={props.columns} hands={props.hands} />
        </>
    )
}