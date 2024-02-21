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
const ConatinerShoe = styled.div`
    flex: 1;
    margin: 5px;
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
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 70%;
    z-index: 2;
    
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    /* border-radius: 50%; */
    color: #147575;
    /* background-color: white; */
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
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* align-self: end; */
    height:40px ;
    padding: 7px;
`

const Money = styled.div`
   text-align: center;
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
 

export default function Shops({item}) {
  return (
      <>
      
    <ConatinerShoe>
        <Circle/>
        <Image src={item.thumbnail} />
        <Money>

            <Price>price : {item.price}</Price>
        </Money>
        <Info>
            <Title>{item.title} </Title>
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
    </ConatinerShoe>
    </>
  )
}

