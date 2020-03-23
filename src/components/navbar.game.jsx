import React from 'react';
import {
	Button,
	Navbar,
	Form,
	InputGroup,
	FormControl,
	Popover,
	OverlayTrigger,
	ListGroup
} from 'react-bootstrap';

export default props => {
	const sortUsersByScore = (a, b) => a.score > b.score;

	const scoreBoard = (
		<Popover id='scoreBoard'>
			<Popover.Title as='h3'>Scoreboard</Popover.Title>
			<Popover.Content>
				<ListGroup variant='flush'>
					{props.users.sort(sortUsersByScore).map((user, i) => {
						let textColor = '';
						switch (i) {
							case 0:
								textColor = 'text-success';
								break;
							case 2:
								textColor = 'text-danger';
								break;
							case 1:
								textColor = 'text-warning';
								break;
							default:
								textColor = 'text-warning';
								break;
						}

						return (
							<ListGroup.Item key={i}>
								<div className='row'>
									<div className={'col-xs-6 mr-2 '}>
										<span
											role='img'
											aria-label='King'
											style={{
												visibility:
													i === 0
														? 'visible'
														: 'hidden'
											}}
										>
											&#128081;
										</span>
									</div>
									{/* <div className={"col-xs-6 mr-2 "}>{(i + 1)}.</div> */}
									<div
										className={'col-xs-6 mr-2 ' + textColor}
									>
										{user.score}
									</div>
									<div className='col-xs-6 '>{user.name}</div>
								</div>
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Popover.Content>
		</Popover>
	);

	// console.log(props.timer);

	return (
		<>
			<Navbar
				className='justify-content-between'
				bg='dark'
				variant='dark'
			>
				<Form inline>
					<InputGroup className='mr-sm-2'>
						<InputGroup.Prepend>
							<InputGroup.Text id='basic-addon1'>
								<span role='img' aria-label='user-avatar-icon'>
									👤
								</span>
							</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							placeholder='Username'
							aria-label='Username'
							aria-describedby='basic-addon1'
							defaultValue={props.username}
							disabled
						/>
					</InputGroup>

					<OverlayTrigger
						trigger='click'
						placement='bottom'
						overlay={scoreBoard}
					>
						<Button variant='info'>&#9776;</Button>
					</OverlayTrigger>
				</Form>
				<Form inline>
					<Form.Label className='mr-sm-2 text-warning h4'>
						{props.timer}
					</Form.Label>
					<Button variant='danger' onClick={() => props.quitGame()}>
						Quit game
					</Button>
				</Form>
			</Navbar>
		</>
	);
};
