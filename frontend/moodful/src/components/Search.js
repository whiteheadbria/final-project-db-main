import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
	const [search, setSearch] = useState('');
	const [record, setRecord] = useState([]);

	// On Page load display all records
	const loadProviderDetails = async () => {
		var response = fetch('http://localhost:8000/provider')
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setRecord(myJson);
			});
	};
	useEffect(() => {
		loadProviderDetails();
	}, []);

	// Search Records here
	const searchRecords = () => {
		axios.get(`http://localhost:8000/provider/${search}`).then((response) => {
			setRecord(response.data);
		});
	};

	// const loadRecordAgain = () => {
	// 	var response = fetch('http://localhost:8000/provider')
	// 		.then(function (response) {
	// 			return response.json();
	// 		})
	// 		.then(function (myJson) {
	// 			setRecord(myJson);
	// 		});
	// };
	// useEffect(() => {
	// 	loadRecordAgain();
	// }, []);

	return (
		<section>
			<div class='container'>
				<h4 className='mb-3 text-center mt-4'>Search Providers by Zip</h4>
				<div class='row mt-3'>
					<div class='col-sm-11'>
						<div class='input-group mb-4 mt-3'>
							<div class='form-outline'>
								<input
									type='text'
									id='form1'
									// onKeyDown={loadRecordAgain}
									onKeyUp={searchRecords}
									onChange={(e) => setSearch(e.target.value)}
									class='form-control'
									placeholder='Search Employee Here'
									style={{ backgroundColor: '#ececec' }}
								/>
							</div>
							{/* <button type="button" onClick={searchRecords}  class="btn btn-success">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button> */}
						</div>
						<table class='table table-hover  table-striped table-bordered ml-4 '>
							<thead>
								<tr>
									<th>Company</th>
									<th>Address</th>
									<th>City</th>
									<th>Zip</th>
									<th>Phone</th>
									<th>Website</th>
								</tr>
							</thead>
							<tbody>
								{record.map((name) => (
									<tr>
										<td>{name.Company}</td>
										<td>{name.Address}</td>
										<td>{name.City}</td>
										<td>{name.zip}</td>
										<td>{name.Phone}</td>
										<td>{name.Website}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Search;
