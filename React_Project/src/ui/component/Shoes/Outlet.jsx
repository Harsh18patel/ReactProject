import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'


const Info= styled.div`
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
const ContainerOutlet= styled.div`
    flex: 1;
    margin: 5px;
    margin-bottom:70px;
    min-width: 350px;
    height: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;


    &:hover ${Info}{
        opacity: 1;
    }
`
const Image = styled.img`
   height: 70%;
    z-index: 2;
`
const Money = styled.div`
   text-align: center;
   display: flex;
`
const Price = styled.h4`
   padding: 20px;
   font-size: 20px;

  
`
const Title = styled.h1`
   font-size: 18px;
    text-align: center;
    color: brown;
`
const Icon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height:40px ;
margin: 10px;
`
const Icons = styled.div`
  width: 40px;
  height: 40px;
  /* border-radius: 50%;
  background-color: white; */
  color: #11739a;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  cursor: pointer;
  transition: all 0.5s ease;
  
  &:hover{
    color: red;
     transform: scale(1.1);
  }
  `



export default function Outlet({item}) {
  return (
    <>
    <ContainerOutlet>
      <Image src={item.img}/>
      <Money>
        <Price>price : {item.price}</Price>
      </Money>
      <Info>
        <Title>{item.title}</Title>
        <Icon>
            <Icons>
              <ShoppingCartOutlined />
            </Icons>
            <Icons>
              <SearchOutlined/>
            </Icons>
            <Icons>
              <FavoriteBorderOutlined />
            </Icons>
          
        </Icon>
      </Info>
    </ContainerOutlet>
    </>
  )
}
