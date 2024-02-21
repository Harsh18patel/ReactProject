import React from 'react'
import styled from 'styled-components'

const Money = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  transition: 1s all ease-in-out;
  cursor: pointer;
`
const MainContain = styled.div`
position: relative;
  flex: 1;
  margin: 10px;
  margin-bottom: 100px;
  min-width: 300px;
  height: 400px;
  flex-direction: column;
  text-align: center;
  background-color: white;
  cursor: pointer;

  &:hover ${Money}{
  
    opacity: 1;
  }
`
const Images = styled.img`
  height: 90%;
  width: 100%;
  z-index: 2;
`
const Price = styled.h2`
  padding-top: 400px;
  font-size: 25px;
`

export default function Male({item}) {
  return (
    <>
    <MainContain>

      <Images src={item.img} />
      
      <Money>
        <Price> Price {item.price}</Price>
      </Money>

    </MainContain>
    </>
  )
}
