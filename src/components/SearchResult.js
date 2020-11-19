import React from 'react'
import styled from "styled-components/macro";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'

function SearchResult({
  img, location, title, description, star, price, total
}) {
  return (
    <SearchResultWrapper>
      <Img src={img} alt="" />
      <SearchResultHeart />
      <SearchResultInfo>
        <SearchResultInfoTop>
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </SearchResultInfoTop>
        <SerchResultInfoBottom>
          <SearchResultStarts>
            <SearchResultStar />
            <p>
              <strong>{star}</strong>
            </p>
          </SearchResultStarts>
          <SearchResultPrice>
            <h2>{price}</h2>
            <p>{total}</p>
          </SearchResultPrice>
        </SerchResultInfoBottom>
      </SearchResultInfo>
    </SearchResultWrapper>
  )
}

export default SearchResult

const SearchResultWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 20px;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  opacity: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Img = styled.img`
  height: 200px;
  width: 350px;
  border-radius: 10px;
  overflow: hidden;
`;

const SearchResultInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`;

const SearchResultHeart = styled(FavoriteBorderIcon)`
  position: absolute;
  top: 20px;
  right: 40px;
`;



const SearchResultInfoTop = styled.div`
  width: 40vw;

  h3 {
    font-weight: 300;
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
    font-size: 13px;
    color: gray;
  }
`;

const SerchResultInfoBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchResultStarts = styled.div`
  display: flex;
  align-items: center;
`;

const SearchResultStar = styled(StarIcon)`
  color: red;
`;

const SearchResultPrice = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;

  p {
    text-align: right;
  }
`;