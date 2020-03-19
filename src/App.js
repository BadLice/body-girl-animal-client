import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
import GameList from './components/game.list';
import { useCookies } from 'react-cookie'
import Game from './components/game'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";

export default () => {
  const history = useHistory();

  let gameId = useQuery().get('id');

  console.log('gameId: ' + gameId);

  // let server = "http://worddd.cloudno.de"
  let server = "http://localhost:15519"

  const [{ userId }, setCookie, removeCookie] = useCookies(['body-girl-animal-userId']);

  let [usernameSaved, setUsernameSaved] = useState(false);
  let [username, setUsername] = useState('');

  let connection = useSocketConnection(server, userId, setCookie, setUsername, setUsernameSaved);

  // let [gameId, setGameId] = useState(null);
  let [columns, setColumns] = useColumns(gameId, connection);
  let [hands, setHands] = useHands(gameId, connection, userId);



  let saveUsername = value => {
    connection.emit('reqSaveUsername', { id: userId, name: value });
    connection.on('getSaveUsername', success => success && setUsernameSaved(true) && setUsername(value));
  }
  return (
    <Switch>

      <Route path="/game">
        <Game connection={connection} setColumns={setColumns} setHands={setHands} saveUsername={saveUsername} usernameSaved={usernameSaved} setUsernameSaved={setUsernameSaved} username={username} columns={columns} hands={hands} gameId={gameId} history={history} />
      </Route>

      <Route path="/">
        <GameList connection={connection} setColumns={setColumns} setHands={setHands} saveUsername={saveUsername} usernameSaved={usernameSaved} setUsernameSaved={setUsernameSaved} username={username} gameId={gameId} history={history} />
      </Route>

    </Switch>
  );
}

let useColumns = (gameId, connection) => {
  let [columns, setColumns] = useState([]);

  useEffect(() => {
    if (connection && gameId) {
      connection.emit('reqColumns', gameId);
      connection.on('getColumns', columns => setColumns(columns.concat(['Actions', 'Total'])));
      return () => connection.off('getColumns')
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
      return () => connection.off('getHands')
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
    } else {
      s.emit('reqUsername', userId);
    }

    s.on('getUsername', username => {
      setUsername(username);
      setUsernameSaved(true);
    });
    s.on('getUserId', user => setCookie('userId', user.id, { maxAge: 3600 * 8 }) && setUsername(user.name))

    console.log('SOCKET ID: ' + s.id)
    setSocket(s);

    return () => {
      s.off('getUsername');
      s.off('getUserId');
    }

  }, [server, userId, setCookie, setUsername, setUsernameSaved])

  return socket;

}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}