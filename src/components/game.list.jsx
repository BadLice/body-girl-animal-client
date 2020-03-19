
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import NavBar from './navbar.gamelist'
import CreateGameModal from './create.game.modal'
export default props => {
    let games = useGames(props.connection);
    let [searchText, setSeatchText] = useState('');
    const [showCreateGameModal, setShowCreateGameModal] = useState(false);
    const [newGameId, setNewGameId] = useState(null);

    const createGame = () => {
        props.connection.emit('reqCreateGame');
        props.connection.on('getCreateGame', gameId => {
            setNewGameId(gameId);
            setShowCreateGameModal(true)
        });
    }

    let joinGame = (gameId) => {
        props.connection.emit('reqJoinGame', gameId);

        props.connection.on('getJoinGame', success => {
            if (success) props.history.push("/game?id=" + gameId);
        })
    }

    let gameFilter = (game) => game.id.includes(searchText) || game.name.includes(searchText);

    return (
        <>
            <NavBar createGame={createGame} setSeatchText={setSeatchText} saveUsername={props.saveUsername} setUsernameSaved={props.setUsernameSaved} username={props.username} usernameSaved={props.usernameSaved} />
            <CreateGameModal show={showCreateGameModal} newGameId={newGameId} setShow={setShowCreateGameModal} connection={props.connection} history={props.history}/>
            {
                games.filter(gameFilter).map(game =>
                    <Card key={game.id} border="primary" className="m-2 game-card" >
                        <Card.Body>
                            <Card.Title>{game.name}</Card.Title>
                            <Card.Text>
                                <br />
                                <span className="border border-dark p-3 mt-3">
                                    {
                                        game.users.map((user, i) =>
                                            <span key={i}>{user.name}
                                                {i !== game.users.length - 1 ? (<>, </>) : ''}
                                            </span>
                                        )
                                    }
                                </span>
                                <br />
                                <br />
                                <span>
                                    ID:
                                    <span className="text-primary m-1">
                                        {game.id}
                                    </span>
                                </span>
                            </Card.Text>
                            <Button variant="primary" onClick={() => joinGame(game.id)}>Join</Button>
                        </Card.Body>
                    </Card>
                )
            }
        </>
    );
}

let useGames = (connection) => {
    let [games, setGames] = useState([]);

    useEffect(() => {
        if (connection) {
            connection.emit('reqGames');
            connection.on('getGames', (data) => setGames(data))
            return () => connection.off('getGames');
        }
    }, [connection]);

    return games;
}