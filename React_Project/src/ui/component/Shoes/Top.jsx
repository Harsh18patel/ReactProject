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
const ContainerTop = styled.div`
    flex: 1;
    margin: 5px;
    margin-bottom:70px;
    min-width: 280px;
    height: 420px;
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
   text-decoration: line-through;
   font-size: 18px;
    
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
    padding: 7px;
`
const Icons = styled.div`
    width: 40px;
    height: 40px;
    /* border-radius: 50%; */
    /* background-color: white; */
    color: #147575;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 35px;
    cursor: pointer;
    transition: all 0.5s ease;
    
    &:hover{
        color: red;
        transform: scale(1.1);
    }
`
const Priced = styled.h4`
    padding: 20px;
    font-size: 18px;
`

export default function Top({item}) {
  return (
    <>
    <ContainerTop>
        <Image src={item.img}/>
        <Money>
            <Price>{item.price}</Price>
            <Priced>{item.Price}</Priced>
        </Money>
        <Info>
            <Title>{item.title}</Title>
            <Icon>
                <Icons>
                <ShoppingCartOutlined/>
                 </Icons>
                <Icons>
                <SearchOutlined/>
                 </Icons>
                <Icons>
                <FavoriteBorderOutlined/>
                 </Icons>
            </Icon>
        </Info>
    </ContainerTop>
    </>
  )
}
