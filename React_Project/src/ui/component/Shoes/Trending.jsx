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
const ContainerTrend = styled.div`
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
    color: black;

`
const Title = styled.h1`
    font-size: 18px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
    color: #433333;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    margin: 13px;

`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    /* border-radius: 50%;
    background-color: white; */
    color: #118a8a;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    cursor: pointer;
    transition: all 0.5s ease;
    
    &:hover{
        color: red;
        transform: scale(1.1);
    }
`


export default function Trending({item}) {
  return (
    <>
    <ContainerTrend>
        <Image src= {item.img}/>
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
    </ContainerTrend>
    </>
  )
}
