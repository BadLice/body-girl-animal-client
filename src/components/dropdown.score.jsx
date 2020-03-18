import React from 'react';
import { DropdownButton, InputGroup, Dropdown } from 'react-bootstrap';

export default props => {

    let variant = '';
    switch (props.toggle) {
        case 0: variant = 'danger'; break;
        case 5: variant = 'primary'; break;
        case 10: variant = 'success'; break;
        default: variant = 'danger'; break;
    }

    return (
        props.handState !== 'confirmed' ?
            (
                <InputGroup.Prepend>
                    <InputGroup.Text className={variant}>{props.toggle}</InputGroup.Text>
                </InputGroup.Prepend>
            )
            :
            (
                <DropdownButton
                    disabled={props.disabled} onSelect={value => props.setInputScore(value, props.handId, props.inputIndex)}
                    as={InputGroup.Prepend}
                    variant={variant}
                    title={props.toggle}
                >
                    <Dropdown.Item eventKey={0}>0</Dropdown.Item>
                    <Dropdown.Item eventKey={5}>5</Dropdown.Item>
                    <Dropdown.Item eventKey={10}>10</Dropdown.Item>
                </DropdownButton>
            )
    )

}
