import styled from "styled-components"
import React, { Components }  from 'react';

const Container = styled.div`
height: 30px;
background-color: #008080;
color: #ffffff;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500px;
`

const Announcement = () => {
  return (
    <Container>
      Deal of the day! Free shipping on orders over £35
    </Container>
  )
}

export default Announcement
