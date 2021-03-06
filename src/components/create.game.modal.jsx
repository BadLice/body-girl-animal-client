import React, { useState, useRef, createRef } from 'react';
import {
	Modal,
	Button,
	Form,
	FormText,
	FormControl,
	ListGroup
} from 'react-bootstrap';

export default props => {
	const handleClose = () => {
		props.connection.emit('reqQuitGame');
		props.setShow(false);
	};
	const generateField = () => ({ value: '', ref: createRef() });
	const [fields, setFields] = useState([generateField()]);
	const gameNameRef = useRef();
	const [timer, setTimer] = useState({
		valid: true,
		value: 60,
		ref: createRef()
	});

	const submit = (e, callback) => {
		e.preventDefault();
		e.stopPropagation();
		if (callback) {
			callback();
		}
	};

	const validateField = () => {
		setFields(
			[...fields].map(f => ({ ...f, valid: f.value.trim() !== '' }))
		);

		let tv = !isNaN(timer.ref.current.value.trim());
		let t = { ...timer };
		t.valid = tv;
		if (tv) {
			t.value =
				timer.ref.current.value.trim().length === 0
					? 60
					: Number(timer.ref.current.value.trim());
		}

		setTimer({
			...timer,
			valid: t.valid,
			value: t.value
		});
	};

	const startGame = () => {
		let valid = true;
		fields.forEach(f => (valid &= f.valid));
		valid &= timer.valid;

		if (valid) {
			props.connection.emit('startGame', {
				defaultTimer: timer.value,
				gameId: props.newGameId,
				name: gameNameRef.current.value.trim(),
				columns: fields.map(f => f.value.trim())
			});
			props.history.push('/game/' + props.newGameId);
			props.setShow(false);
		}
	};

	const setField = (i, value) => {
		let f = [...fields];
		f[i].value = f[i].ref.current.value.trim();
		setFields(f);
	};

	const addField = () => {
		setFields([...fields].concat(generateField()));
	};

	const removeField = i => {
		let f = [...fields];
		f.splice(i, 1);
		setFields(f);
	};

	return (
		<>
			<Modal show={props.show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create a game</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormText className='font-weight-bold'>ID</FormText>
					<FormText
						className='font-weight-bold text-danger'
						variant='danger'
					>
						{props.newGameId}
					</FormText>
				</Modal.Body>

				<Modal.Body>
					<FormText className='font-weight-bold'>Name</FormText>
					<FormControl
						type='text'
						placeholder='Game name...'
						ref={gameNameRef}
					/>
				</Modal.Body>

				<Modal.Body>
					<FormText className='font-weight-bold'>Timer</FormText>
					<FormControl
						type='text'
						placeholder='60'
						ref={timer.ref}
						isInvalid={!timer.valid}
						onBlur={validateField}
					/>
				</Modal.Body>

				<Modal.Body>
					<FormText className='font-weight-bold'>Fields</FormText>
					{fields.map((field, i) => (
						<Form
							key={i}
							inline
							className=' mt-1'
							onSubmit={e => submit(e)}
						>
							<Form.Control
								isInvalid={!field.valid}
								ref={field.ref}
								type='text'
								placeholder='Istert field...'
								style={{ width: '80%' }}
								className=' mr-sm-1'
								onChange={() => setField(i)}
								value={field.value}
								onBlur={validateField}
							/>
							{fields.length > 1 ? (
								<Button
									variant='danger'
									className=' mr-sm-1'
									onClick={() => removeField(i)}
								>
									-
								</Button>
							) : (
								''
							)}
							{i === fields.length - 1 ? (
								<Button
									variant='success'
									className=' mr-sm-1'
									onClick={() => addField()}
								>
									+
								</Button>
							) : (
								''
							)}
						</Form>
					))}
				</Modal.Body>

				<Modal.Body>
					<FormText className='font-weight-bold'>
						Users connected
					</FormText>
					<ListGroup>
						{props.users.map((user, i) => (
							<ListGroup.Item key={i}>{user.name}</ListGroup.Item>
						))}
					</ListGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={startGame}>
						Start game
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
