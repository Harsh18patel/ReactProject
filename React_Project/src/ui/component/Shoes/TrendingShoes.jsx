import React from 'react'
import { Popular } from '../../../Data'
import Trending from './Trending'
import styled from 'styled-components'

const Headings = styled.div`
     font-size: 50px;
    font-weight: bold;
    padding: 10px;
    margin-top: 70px;
    margin-left: 30px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
`
const MainContainers = styled.div`
    padding: 20px;
    margin-right: 60px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 70px;
`
const ContainImage = styled.div`
    flex: 2;
    padding-top: 100px;

`
const Image = styled.img`
    /* height: 100%;
    width: 100%; */
    
    object-fit: contain;

`
const Container = styled.div`
       flex: 1;
    margin-right: 330px;
    padding: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`


export default function TrendingShoes(){
    return(
        <>
        
    <Headings>TRENDING</Headings>
    <MainContainers>
        <ContainImage>
            <Image src="/src/assets/trending.png" />
        </ContainImage>
        <Container>
            {Popular.map(item=>(
               <Trending item={item} key={item.id} />
            ))}
        </Container>

        
    </MainContainers>
    </>
        
    )
        
    
}
