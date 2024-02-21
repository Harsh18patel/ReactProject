import React from 'react'
import { Males } from '../../../../Data'
import Kid from './Kid'
import styled from 'styled-components'

const Contain = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function Kiditem() {
  return (
    <>
    <Contain>
        {Males.map(item=>(
            <Kid item={item} key={item.id} />
        ))}
    </Contain>
    </>
  )
}
