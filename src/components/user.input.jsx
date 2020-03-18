import React, { useRef } from 'react';
import Score from './dropdown.score'
import { InputGroup, FormControl } from 'react-bootstrap';

export default props => {
    let inputRef = useRef();
    return (
        <>
            <td className="align-middle">
                <InputGroup size="sm" className="mb-3" >

                    {
                        props.state !== 'playing' ?
                            (
                                <Score handId={props.handId} inputIndex={props.index} toggle={props.input.score} handState={props.handState} setInputScore={props.setInputScore} />
                            )
                            :
                            ('')
                    }


                    <FormControl ref={inputRef} aria-label="Small" aria-describedby="inputGroup-sizing-sm" disabled={props.handState !== 'playing'} defaultValue={props.input.value} onBlur={() => props.setInputValue(inputRef.current.value, props.handId, props.index)} />
                </InputGroup>
                
            </td>
        </>
    );
}
