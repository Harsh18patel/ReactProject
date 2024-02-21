import React from 'react'
import { Males } from '../../../../Data'
import Male from './Male'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function MalesItem() {
  return (
    <>
    <Container>
        {Males.map(item=>(
            <Male item={item} key={item.id} />
        ))}
    </Container>
    </>
  )
}
