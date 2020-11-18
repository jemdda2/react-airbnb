import React from 'react';
import styled from "styled-components/macro";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

function Header() {
	return (
		<HeaderWrapper>
			<HeaderIcon
				src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
				alt=""
			/>
			<HeaderCenter>
				<input type="text" />
				<SearchIcon />
			</HeaderCenter>
			<HeaderRight>
				<p>Become a host</p>
				<LanguageIcon />
				<ExpandMoreIcon />
				<Avatar />
			</HeaderRight>
		</HeaderWrapper>
	)
}

export default Header

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 100;
	width: 100%;
`;

const HeaderIcon = styled.img`
	object-fit: contain;
	height: 100px;
	margin-left: 20px;
`
const HeaderCenter = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	max-width: fit-content; 
	padding: 10px;
	height: 30px;
	border: 1px solid lightgray;
	border-radius: 999px;

	input {
		border: none;
		padding: 10px;
		width: 250px;
		outline-width: 0;
	}
`;

const HeaderRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 15vw;
	margin-right: 80px;
`;
