import React, { useState } from 'react'
import styled from "styled-components/macro";
import { Button } from '@material-ui/core'
import Search from './Search';
import { useHistory } from 'react-router-dom';

function Banner() {
	const history = useHistory();
	const [showSearch, setShowSearch] = useState(false);

	return (
		<BannerWrapper>
			<BannerSearch>
				<BannerSearchButton onClick={() => setShowSearch(!showSearch)} variant="outlined">
					{showSearch ? 'Hide' : 'Search Dates'}
				</BannerSearchButton>
				{showSearch && <Search />}
			</BannerSearch>
			<BannerInfo>
				<h1>Get out and stretch your imagination</h1>
				<h5>Plan a different kind of getway to uncover the hidden gems near you.</h5>
				<Button onClick={() => history.push('/search')} variant="outlined">Explore Nearby</Button>
			</BannerInfo>
		</BannerWrapper>
	)
}

export default Banner

const BannerWrapper = styled.div`
  background: url("./images/airbnb-ski-aspen-28328347.jpg") center center;
	/* height: 50vh; */
	position: relative;
`;

const BannerInfo = styled.div`
	background-color: black;
	color: white;
	padding-top: 28vh;
	padding-left: 50px;
	padding-right: 50px;
	padding-bottom: 40px;
	width: 300px;

	button {
		background-color: #ff7779;
		color: white;
		text-transform: inherit;
		margin-top: 20px;
		font-weight: 600;

		&:hover {
			background-color: white;
			color: #ff7779;
		}
	}

	h5 {
		margin-top: 10px;
	}
`;

const BannerSearch = styled.div`
	display: flex;
	flex-direction: column;
`;

const BannerSearchButton = styled(Button)`
	background-color: white !important;
	font-weight: 900 !important;
	text-transform: inherit !important;
	color: #ff7779 !important;
`;

