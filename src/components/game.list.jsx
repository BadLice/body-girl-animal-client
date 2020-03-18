
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import NavBar from './navbar.gamelist'

export default props => {
    let games = useGames(props.connection);

    let joinGame = (gameId) => {
        props.connection.emit('reqJoinGame', gameId);

        props.connection.on('getJoinGame', success => {
            success ? props.setGameId(gameId) : props.setGameId(null);
        })
    }

    return (
        <>
            <NavBar saveUsername={props.saveUsername} setUsernameSaved={props.setUsernameSaved} username={props.username} usernameSaved={props.usernameSaved}/>
            {
                games.map(game =>
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
        }
    }, [connection]);

    return games;
}