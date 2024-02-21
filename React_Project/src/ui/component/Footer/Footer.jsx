import { FacebookOutlined, Instagram, YouTube } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const MainContain = styled.div`
      padding: 50px;
      
      `
const Social = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
gap: 30px;

  
`
const Icon = styled.div`
cursor: pointer;
`
const Heads = styled.div`
  display: flex;
  align-items: center;
  justify-content: center ;
  padding: 20px;
  color: gray;

`
const Hed = styled.div`
    padding: 10px;
    font-size: 17px;
    cursor: pointer;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    &:hover{
      color: black;
      transition: 0.5s all ease-in-out;
    }
`

export default function Footer() {
  return (
    <>
    <MainContain>
      <Social>
        <Icon >
          <FacebookOutlined style={{fontSize:"30px"}}/>
        </Icon>
        <Icon>
          <Instagram style={{fontSize:"30px"}}/>
        </Icon>
        <Icon>
          <YouTube style={{fontSize:"30px"}}/>
        </Icon>
      </Social>

      <Heads>
        <Hed>Home</Hed>
        <Hed>Shop</Hed>
        <Hed>Blog</Hed>
        <Hed>About Us</Hed>
        <Hed>Contact</Hed>
      </Heads>
    </MainContain>
    </>
  )
}
