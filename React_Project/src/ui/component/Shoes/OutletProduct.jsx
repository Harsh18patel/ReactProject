import React from 'react'
import { outlet } from '../../../Data'
import Outlet from './Outlet'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Heading = styled.div`
    margin-top: 70px;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    padding: 30px ;
`

export default function OutletProduct() {
  return (
    <>
    <Heading>OUTLET</Heading>
    <Container>
      {outlet.map(item=>(
        <Outlet item={item} key={item.id}/>
      ))}
    </Container>
    </>
  )
}
