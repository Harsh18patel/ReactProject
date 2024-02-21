import React from 'react'
import { Males } from '../../../../Data'
import Women from './Women'
import styled from 'styled-components'

const Conatin = styled.div`
     padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function WomenItem() {
  return (
    <>
    <Conatin>
        {Males.map(item=>(
            <Women item={item} key={item.id} />
        ))}
    </Conatin>
    </>
  )
}
