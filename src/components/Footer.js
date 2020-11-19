import React from 'react'
import styled from "styled-components/macro"

function Footer() {
  return (
    <FooterWrapper>
      <p>© 2020 Airbnb clone! No rights reserved</p>
      <p>Privacy · Terms · Sitemap · Company Details</p>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  border-top: 1px solid lightgray;
  padding: 20px;
  background-color: #f7f7f7;
  bottom: 0;
  text-align: center;
  bottom: 0;

  p {
    padding: 5px;
    font-size: 14px;
  }
`;