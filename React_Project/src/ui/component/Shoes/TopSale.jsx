import React from 'react'
import { shoes } from '../../../Data'
import Top from './Top'
import styled from 'styled-components'

const Heading = styled.div`
    margin-top: 100px;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    padding: 30px ;
`
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`

export default function TopSale() {
  return (
    <>
    <Heading>TOP SALE</Heading>
    <Container>
        {shoes.map(item=>(
            <Top item={item} key={item.id}/>
        ))}

        
    </Container>
    </>
  )
}
