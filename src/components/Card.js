import React from 'react'
import styled from "styled-components/macro"

function Card({ src, title, description, price }) {
  return (
    <CardWrapper>
      <Image src={src} alt="" />
      <CardInfo>
        <Title>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
        <Price>
          {price}
        </Price>
      </CardInfo>
    </CardWrapper>
  )
}

export default Card

const CardWrapper = styled.div`
  margin: 10px;
  border: 0px solid black;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 6px 18px -9px rgba(0,0,0,0.75);
  transition: transform 0.25s ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.07);
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Image = styled.img`
  object-fit: fill;
  min-width: 300px;
  min-height: 200px;
  width: 100%;
`;

const CardInfo = styled.div`
  margin-top: -9px;
  border-radius: 10px;
  padding: 20px;
  padding-top: 20px;
  border: 1;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;

const Description = styled.h4`
  font-size: 14px;
  font-weight: 300;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Price = styled.h3``;







