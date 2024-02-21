import styled from '@emotion/styled'
import React from 'react'

const ContainerCat = styled.div`
    flex:1;
    margin: 10px;
    height: 250px;
    position: relative;
    background-color: #eeeef2;
    border-radius: 50%;

`
const Image = styled.img`
    width: 80%;
    height: 60%;
    object-fit: cover;
    padding-left: 40px;
    margin-top: 120px;

    
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;

`
const Title = styled.h1`
    color: black;
    font-size: 27px;
    font-weight: 500;

`

export default function CategoryItem({item}) {
  return (
    <>
    <ContainerCat>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
        </Info>
    </ContainerCat>
    </>
  )
}
