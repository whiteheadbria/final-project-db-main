import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';

export default function Searchbar() {
	// usestate hooks
	const [zip, setZip] = useState([]);

	const getZip = async () => {
		try {
			const zipCodes = await axios.get('http of backend');

			// Set Data
			setZip(zipCodes.data);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getZip();
	}, []);

	return (
		<>
			<Navbar bg='light' expand='lg'>
				<Container fluid>
					<Form className='d-flex'>
						<Form.Control
							type='search'
							placeholder='Search'
							className='me-2'
							aria-label='Search'
						/>
						<Button variant='outline-success'>Search</Button>
					</Form>
				</Container>
			</Navbar>
		</>
	);
}
