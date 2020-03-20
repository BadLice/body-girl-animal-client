import React from 'react';
import { ListGroup, Alert, Spinner} from 'react-bootstrap';

export default props => {
    return (
        <>
            <Alert variant="info" className="m-3">
                <Alert.Heading>
                    Game is starting ...
                    <Spinner animation="grow" variant="danger" className="float-right" />
                </Alert.Heading>
                <hr />
                <p>
                    Connected users
                </p>
                <ListGroup>
                    {
                        props.users.map((user, i) =>
                            <ListGroup.Item key={i}>{user.name}</ListGroup.Item>
                        )
                    }
                </ListGroup>
            </Alert>
        </>
    )

}
