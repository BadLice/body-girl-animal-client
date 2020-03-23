import React, { useRef, useState } from 'react';
import Score from './dropdown.score';
import { InputGroup, FormControl } from 'react-bootstrap';
import { useEffect } from 'react';

export default props => {
	let inputRef = useRef();

	let [inputValid, setInputValid] = useState(true);

	let manageInputValid = value => {
		let v =
			value
				.trim()
				.toUpperCase()
				.charAt(0) === props.character.toUpperCase().charAt(0) ||
			value.length === 0;
		setInputValid(v);
	};

	let inputOnChange = value => {
		props.setInputValue(value, props.handId, props.index, props.character);
		manageInputValid(value);
	};

	useEffect(() => {
		if (props.handState !== 'playing') {
			let v =
				inputRef.current.value
					.trim()
					.toUpperCase()
					.charAt(0) === props.character.toUpperCase().charAt(0);
			setInputValid(v);

			if (!inputValid) {
				inputRef.current.value = '';
				props.setInputScore(0, props.handId, props.index);
			}
		}
	}, [props.handState, inputValid]);

	return (
		<>
			<td className='align-middle'>
				<InputGroup size='sm' className='mb-3'>
					{props.state !== 'playing' ? (
						<Score
							handId={props.handId}
							inputIndex={props.index}
							toggle={props.input.score}
							handState={props.handState}
							setInputScore={props.setInputScore}
							inputValid={inputValid}
						/>
					) : (
						''
					)}

					<FormControl
						isInvalid={!inputValid}
						ref={inputRef}
						aria-label='Small'
						aria-describedby='inputGroup-sizing-sm'
						disabled={props.handState !== 'playing'}
						defaultValue={props.input.value}
						onChange={() =>
							inputOnChange(inputRef.current.value.trim())
						}
					/>
				</InputGroup>
			</td>
		</>
	);
};
