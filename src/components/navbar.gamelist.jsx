
import React, { useRef } from 'react';
import { Button, Navbar, Form, InputGroup, FormControl } from 'react-bootstrap';

export default props => {
    let usernameRef = useRef();
    let searchRef = useRef();

    const submit = (e, callback) => {
        e.preventDefault();
        e.stopPropagation();
        if (callback) {
            callback();
        }
    }

    return (
        <>
            <Navbar className="bg-light justify-content-between" bg="dark" variant="dark">
                <Form inline onSubmit={(e) => submit(e, () => props.saveUsername(usernameRef.current.value.trim()))}>
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
                <Form inline onSubmit={(e) => submit(e, () => props.setSeatchText(searchRef.current.value.trim()))}>
                    <Button variant="success" className=" mr-sm-2" onClick={() => props.createGame()}>Create game</Button>
                    <FormControl ref={searchRef} type="text" placeholder="Type ID or name..." className=" mr-sm-2" />
                    <Button onClick={() => props.setSeatchText(searchRef.current.value.trim())}>Search</Button>
                </Form>
            </Navbar>
        </>
    );
}