import React, { useState } from 'react'
import styled from 'styled-components/macro'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from 'react-date-range'
import { Button } from '@material-ui/core'
import PeapleIcon from '@material-ui/icons/People';
import { useHistory } from "react-router-dom";


// DATE PICKER COMPONENT
function Search() {
	const history = useHistory();
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	};

	const handleSelect = ranges => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	}

	return (
		<>
		<SearchDatePicker>
			<DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
			<Title>
				Number of guests <PeapleIcon />
			</Title>
			<NumberInput min={0} defaultValue={2} type="number" />
			<SearchButton>Search Airbnb</SearchButton>
		</SearchDatePicker>
			</>
	)
}

export default Search

const SearchDatePicker = styled.div`
	position: fixed;
	top: 175px;
	left: 25%;
	/* margin-left: 25px; */
	width: 560px;
`;

const Title = styled.h2`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 99.8%;
	padding: 10px;
	background-color: white;
	position: absolute;
	left: 0;
	/* top: 380px; */
`;

const NumberInput = styled.input`
	width: 99.8%;
	padding: 10px;
	position: absolute;
	/* left: 0; */
	height: 30px;
	top: 400px;
	border: none;
	font-size: 20px;

	&:focus {
		outline-width: 0;
	}
`;

const SearchButton = styled(Button)`
    position: absolute !important; 
    left: 0;
    top: 450px;
    text-transform: inherit !important;
    background-color: #ff7779 !important;
    color: white !important;
    width: 579px;
`;
