import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Table, Alert } from 'react-bootstrap';
import Hands from './hands';
import TotalRow from './total.row';
import NavbarGame from './navbar.game'
import LoadingGame from './game.loading'
import { Redirect} from 'react-router-dom'

export default props => {
    let timer = useTimer(props.connection);

    useEffect(() => {
        if (props.connection && props.gameId) {
            props.connection.emit('reqJoinGame', props.gameId);
            props.connection.off('getJoinGame');
            props.connection.on('getJoinGame', success => {
                if (success) {
                    props.connection.emit('reqGameStarted', props.gameId);
                }
            })
            return () => props.connection.off('getJoinGame');
        }
    }, [props.connection, props.gameId])


    let quitGame = () => {
        props.connection.emit('reqQuitGame');
        props.connection.off('getQuitGame');
        props.connection.on('getQuitGame', () => props.history.push('/'));
    }

    let setInputScore = (value, handId, inputIndex) => {
        let handIndex = props.hands.findIndex(hand => hand.id === handId)
        let h = [...props.hands];
        h[handIndex].inputs[inputIndex].score = Number(value);

        props.setHands(h);
    }

    let setInputValue = (value, handId, inputIndex, handCharacter) => {
        if (value.trim().toUpperCase().charAt(0) === handCharacter.toUpperCase().charAt(0)) {
            let handIndex = props.hands.findIndex(hand => hand.id === handId)
            let h = [...props.hands];
            h[handIndex].inputs[inputIndex].value = value;
    
            props.setHands(h);
        }
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

    if (!props.gameExists) {
        return (
            <>
                <NavbarGame username={props.username} quitGame={quitGame} users={props.users} timer={timer} />
                <Alert variant="danger" className="m-3">
                    <Alert.Heading>ERROR 404</Alert.Heading>
                    <p>
                        Not found
                    </p>
                    <hr />
                    <p className="mb-0">
                        This game does not exists!
                    </p>
                </Alert>
            </>
        );
    }

    // if(props.hands.length===0) {
    //   return(  <Redirect to="/"/>)
    // }

    return (
        <>
            <NavbarGame username={props.username} quitGame={quitGame} users={props.users} timer={timer} />

            {
                props.gameStarted ? (
                    <>
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
                    :
                    (
                        <LoadingGame users={props.users} />
                    )
            }

        </>
    )
}

const useTimer = (connection) => {
    const [timer, setTimer] = useState('sync...');

    useEffect(() => {
        if (connection) {
            connection.off('syncTimer');
            connection.on('syncTimer', timer => setTimer(timer));
            return () => connection.off('syncTimer');
        }
    }, [connection])

    return timer;
}