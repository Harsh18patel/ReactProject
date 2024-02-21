import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    transition: all 0.5s ease;
    cursor: pointer;
`


const ConatinerShoes = styled.div`
    
    margin: 5px;
    height: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Image = styled.img`
    height: 300px;
    width: 250px;
`

const Price = styled.h4`
    padding: 3px;
    font-size: 20px;
`
const Title = styled.h1`
  font-size: 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
  color: #3d3642;
  
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    padding: 20px;
    
  
  `
const Icon = styled.div`
  width: 20px; 
  height: 20px;
  /* border-radius: 50%; */
  /* background-color: white; */
  color: #11739a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 45px;
  cursor: pointer;
  transition: all 0.5s ease;
  
  &:hover{
    color: red;
        transform: scale(1.1);
    }

`


export default function PopularArrival({item}) {
  return (
    <>
    <ConatinerShoes>
      <Image src= {item.img} />
      
      <Price>price : {item.price}</Price>
      <Info>
        <Title>{item.title}</Title>
        <Icons>
          <Icon>
          <ShoppingCartOutlined/>
          </Icon>
          <Icon>
          <SearchOutlined/>
          </Icon>
          <Icon>
          <FavoriteBorderOutlined/>
          </Icon>
        </Icons>
      </Info>
    </ConatinerShoes>
    {/* <ConatinerPop>
      <Image src='/src/assets/side1.png' />
    </ConatinerPop> */}
    </>
  )
}

