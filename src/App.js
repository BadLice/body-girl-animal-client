import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import GameList from './components/game.list';
import { useCookies } from 'react-cookie';
import Game from './components/game';
import { Switch, Route, useHistory } from 'react-router-dom';

export default () => {
	// let server = 'http://192.168.1.69:15519';
	let server = 'http://worddd.cloudno.de';

	const history = useHistory();

	const [{ userId }, setCookie] = useCookies(['body-girl-animal-userId']);
	let [usernameSaved, setUsernameSaved] = useState(false);
	let [username, setUsername] = useState(null);

	let connection = useSocketConnection(
		server,
		userId,
		setCookie,
		setUsername,
		setUsernameSaved
	);

	// let gameId = useQuery().get('id');
	let [gameId, setGameId] = useState('');

	let [gameExists] = useGameExists(gameId, connection);
	let [gameStarted] = useStarted(gameExists, gameId, userId, connection);
	let [columns, setColumns] = useColumns(
		gameId,
		connection,
		gameExists,
		gameStarted
	);
	let [hands, setHands] = useHands(
		gameId,
		connection,
		userId,
		gameExists,
		gameStarted
	);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (connection && userId && gameId && hands) {
			connection.off('handTimeout');
			connection.on('handTimeout', () => {
				console.log('handTimeout');
				connection.emit('handTimeoutClientResponse', {
					hands: hands,
					userId: userId,
					gameId: gameId
				});
			});
		}
	}, [connection, userId, gameId, hands]);

	useEffect(() => {
		if (connection) {
			connection.off('getUsersConnected');
			connection.on('getUsersConnected', users => setUsers(users));
			return () => connection.off('getUsersConnected');
		}
	}, [connection]);

	let saveUsername = value => {
		connection.emit('reqSaveUsername', { id: userId, name: value });
		connection.off('getSaveUsername');
		connection.on(
			'getSaveUsername',
			success => success && setUsernameSaved(true) && setUsername(value)
		);
	};

	return (
		<Switch>
			<Route path='/game/:gameId'>
				<Game
					connection={connection}
					setColumns={setColumns}
					setHands={setHands}
					saveUsername={saveUsername}
					usernameSaved={usernameSaved}
					setUsernameSaved={setUsernameSaved}
					username={username}
					columns={columns}
					hands={hands}
					gameId={gameId}
					history={history}
					gameExists={gameExists}
					users={users}
					gameStarted={gameStarted}
					setGameId={setGameId}
				/>
			</Route>

			<Route>
				<GameList
					connection={connection}
					setColumns={setColumns}
					setHands={setHands}
					saveUsername={saveUsername}
					usernameSaved={usernameSaved}
					setUsernameSaved={setUsernameSaved}
					username={username}
					gameId={gameId}
					history={history}
					users={users}
					gameStarted={gameStarted}
					setGameId={setGameId}
				/>
			</Route>
		</Switch>
	);
};

let useGameExists = (gameId, connection) => {
	let [gameExists, setGameExists] = useState(false);

	useEffect(() => {
		if (connection && gameId) {
			connection.emit('reqGameExists', gameId);
			connection.on('getGameExists', gameExists =>
				setGameExists(gameExists)
			);
			return () => connection.off('getGameExists');
		}
	}, [connection, gameId]);

	return [gameExists, setGameExists];
};

let useColumns = (gameId, connection, gameExists, gameStarted) => {
	let [columns, setColumns] = useState([]);

	useEffect(() => {
		if (connection && gameId && gameExists && gameStarted) {
			connection.emit('reqColumns', gameId);
			connection.off('getColumns');
			connection.on('getColumns', columns =>
				setColumns(
					['Character'].concat(columns.concat(['Actions', 'Total']))
				)
			);
			return () => connection.off('getColumns');
		}
	}, [gameId, connection, gameExists, gameStarted]);

	return [columns, setColumns];
};

let useHands = (gameId, connection, userId, gameExists, gameStarted) => {
	let [hands, setHands] = useState([]);

	useEffect(() => {
		if (connection && gameId && gameExists && gameStarted) {
			connection.emit('reqHands', { gameId: gameId, userId: userId });
			connection.off('getHands');
			connection.on('getHands', hands => setHands(hands));

			return () => {
				connection.off('handTimeout');
				connection.off('getHands');
			};
		}
	}, [gameId, connection, userId, gameExists, gameStarted]);

	return [hands, setHands];
};

let useSocketConnection = (
	server,
	userId,
	setCookie,
	setUsername,
	setUsernameSaved
) => {
	let [socket, setSocket] = useState(null);

	useEffect(() => {
		var connectionOptions = {
			'force new connection': true,
			reconnectionAttempts: 'Infinity', //avoid having user reconnect manually in order to prevent dead clients after a server restart
			timeout: 10000, //before connect_error and connect_timeout are emitted.
			transports: ['websocket']
		};
		const s = socketIOClient(server, connectionOptions);

		if (
			!userId ||
			(Object.keys(userId).length === 0 && userId.constructor === Object)
		) {
			s.emit('reqUserId');
		} else {
			s.emit('reqUsername', userId);
		}

		s.off('getUsername');
		s.on('getUsername', username => {
			setUsername(username);
			setUsernameSaved(true);
		});
		s.off('getUserId');
		s.on(
			'getUserId',
			user =>
				setCookie('userId', user.id, { maxAge: 3600 * 8 }) &&
				setUsername(user.name)
		);

		setSocket(s);

		return () => {
			s.off('getUsername');
			s.off('getUserId');
		};
	}, [server, userId, setCookie, setUsername, setUsernameSaved]);

	return socket;
};

const useStarted = (gameExists, gameId, userId, connection) => {
	let [started, setStarted] = useState(false);

	useEffect(() => {
		if (connection && gameId && gameExists && userId) {
			connection.emit('reqGameStarted', gameId);
			connection.off('getGameStarted');
			connection.on('getGameStarted', res => setStarted(res));
			return () => connection.off('getGameStarted');
		}
	}, [gameExists, gameId, userId, connection]);

	return [started, setStarted];
};
