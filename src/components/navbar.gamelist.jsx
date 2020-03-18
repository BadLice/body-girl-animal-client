
import React, { useRef } from 'react';
import { Button, Navbar, Form, InputGroup, FormControl } from 'react-bootstrap';

export default props => {
    let usernameRef = useRef();
    return (
        <>
            <Navbar className="bg-light justify-content-between" bg="dark" variant="dark">
                <Form inline>
                    <InputGroup className="mr-sm-2" onChange={() => props.setUsernameSaved(usernameRef.current.value.trim() === '')}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <span role="img" aria-label="user-avatar-icon">
                                    👤
                                    </span>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            ref={usernameRef}
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            defaultValue={props.username}
                        />
                    </InputGroup>
                    <Button onClick={() => props.saveUsername(usernameRef.current.value.trim())} disabled={props.usernameSaved}>Save</Button>
                </Form>
                <Form inline>
                    <FormControl type="text" placeholder="Type ID or name..." className=" mr-sm-2" />
                    <Button type="submit">Search</Button>
                </Form>
            </Navbar>
        </>
    );
}