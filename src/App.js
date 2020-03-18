import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Table, Navbar } from 'react-bootstrap';
import socketIOClient from "socket.io-client";
import GameList from './components/game.list';
import Hands from './components/hands';
import TotalRow from './components/total.row';
import { useCookies } from 'react-cookie'
import NavbarGame from './components/navbar.game'

export default () => {

  // let server = "http://worddd.cloudno.de"
  let server = "http://localhost:15519"


  const [{ userId }, setCookie, removeCookie] = useCookies(['body-girl-animal-userId']);

  let [usernameSaved, setUsernameSaved] = useState(false);
  let [username, setUsername] = useState('');

  let connection = useSocketConnection(server, userId, setCookie, setUsername, setUsernameSaved);

  let [gameId, setGameId] = useState(null);
  
  let [columns, setColumns] = useColumns(gameId, connection);
  let [hands, setHands] = useHands(gameId, connection, userId);

  let quitGame = () => {
    connection.emit('reqQuitGame');
    connection.on('getQuitGame', () => window.location.reload(false));
  }

  let setInputScore = (value, handId, inputIndex) => {
    let handIndex = hands.findIndex(hand => hand.id === handId)
    let h = [...hands];
    h[handIndex].inputs[inputIndex].score = Number(value);

    setHands(h);
  }

  let setInputValue = (value, handId, inputIndex) => {
    let handIndex = hands.findIndex(hand => hand.id === handId)
    let h = [...hands];
    h[handIndex].inputs[inputIndex].value = value;

    setHands(h);
  }

  let confirmHand = (handId) => {
    let handIndex = hands.findIndex(hand => hand.id === handId)
    let h = [...hands];
    h[handIndex].state = 'waiting';

    setHands(h);
  }

  let submitHand = (handId) => {
    let handIndex = hands.findIndex(hand => hand.id === handId)
    let h = [...hands];
    h[handIndex].state = 'submitted';

    setHands(h);
  }

  let addHand = (newHand) => {
    let h = [...hands];
    h.push(newHand);

    setHands(h);
  }

  let saveUsername = value => {
    connection.emit('reqSaveUsername', { id: userId, name: value });
    connection.on('getSaveUsername', success => success && setUsernameSaved(true) && setUsername(value));
  }
  return (
    <>
      {
        gameId === null ?
          (
            <GameList connection={connection} setGameId={setGameId} setColumns={setColumns} setHands={setHands} saveUsername={saveUsername} usernameSaved={usernameSaved} setUsernameSaved={setUsernameSaved} username={username} />
          )
          :
          (
            <>
              <NavbarGame username={username} quitGame={quitGame}/>
              <Table striped bordered hover responsive variant="dark">
                <thead>
                  <tr>
                    {columns.map((c, i) => <th key={i}>{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  <Hands hands={hands} setInputScore={setInputScore} setInputValue={setInputValue} confirmHand={confirmHand} submitHand={submitHand} />
                </tbody>
              </Table >
              <TotalRow columns={columns} hands={hands} />
            </>
          )
      }
    </>
  );
}

let useColumns = (gameId, connection) => {
  let [columns, setColumns] = useState([]);

  useEffect(() => {
    if (connection && gameId) {
      connection.emit('reqColumns', gameId);
      connection.on('getColumns', columns => setColumns(columns.concat(['Actions', 'Total'])));
    }
  }, [gameId]);

  return [columns, setColumns];
}

let useHands = (gameId, connection, userId) => {
  let [hands, setHands] = useState([]);

  useEffect(() => {
    if (connection && gameId) {
      connection.emit('reqHands', { gameId: gameId, userId: userId });
      connection.on('getHands', hands => setHands(hands));
    }
  }, [gameId, userId]);

  return [hands, setHands];
}

let useSocketConnection = (server, userId, setCookie, setUsername, setUsernameSaved) => {

  let [socket, setSocket] = useState(null);

  useEffect(() => {
    var connectionOptions = {
      "force new connection": true,
      "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
      "timeout": 10000,                  //before connect_error and connect_timeout are emitted.
      "transports": ["websocket"]
    };
    const s = socketIOClient(server, connectionOptions);

    if (!userId || (Object.keys(userId).length === 0 && userId.constructor === Object)) {
      s.emit('reqUserId');
      s.on('getUserId', user => setCookie('userId', user.id, { maxAge: 3600 * 8 }) && setUsername(user.name))
    } else {
      s.emit('reqUsername', userId);
      s.on('getUsername', username => {
        setUsername(username);
        setUsernameSaved(true);
      });
    }

    setSocket(s);
  }, [server, userId, setCookie, setUsername, setUsernameSaved])

  return socket;

}