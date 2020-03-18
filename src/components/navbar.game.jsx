
import React from 'react';
import { Button, Navbar, Form, InputGroup, FormControl } from 'react-bootstrap';

export default props => {
    return (
        <>
            <Navbar className="justify-content-between" bg="dark" variant="dark">
                <Form inline>
                    <InputGroup className="mr-sm-2" >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <span role="img" aria-label="user-avatar-icon">
                                    👤
                                    </span>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            defaultValue={props.username}
                            disabled
                        />
                    </InputGroup>
                </Form>
                <Form inline>
                    <Button variant="danger" onClick={() => props.quitGame()}>Quit game</Button>
                </Form>
            </Navbar>
        </>
    );
}