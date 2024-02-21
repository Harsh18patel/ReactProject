import React from 'react'
import { Popular } from '../../../Data'
import PopularArrival from './PopularArrival'
import styled from 'styled-components'

const Heading = styled.div`
    font-size: 50px;
    font-weight: bold;
    padding: 10px;
    margin-top: 70px;
    margin-left: 30px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

`
const MainContain = styled.div`
  padding: 30px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 70px;
`
const Container = styled.div`
    flex: 2;
    padding: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
`
const ConatinImg = styled.div`
    flex: 1;
`

const Image = styled.img`
    height: 110%;
    width: 168%;

    object-fit: contain;
`

export default function PopularArrivalShoe() {
  return (
    <>

    <Heading>POPULAR</Heading>
    <MainContain>

    <Container>
      {Popular.map(item=>(
        <PopularArrival item={item} key={item.id} />
        ))}
        
    </Container>
    <ConatinImg>

        <Image src='/src/assets/side1.png' />
    </ConatinImg>
        </MainContain>
        
    </>
  )
}
