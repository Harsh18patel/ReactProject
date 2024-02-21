import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
background-color: #7192c0;
margin-top: 150px;
margin-bottom: 50px;
`
const TopContain = styled.div`
height: 420px;
    display: flex;
    color: white;
    `
const LeftContain = styled.div`
height: 100%;
width: 100%;
/* background-color: blue; */
`
const RightContain = styled.div`
   padding: 100px;
    height: 100%;
    width: 100%;

`
const Heads = styled.div`
    font-size: 55px;
    font-size: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
`
const Mid = styled.div`
    padding-top: 12px;
    font-size:16px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding-bottom: 30px;
`
const Button = styled.button`
        height: 50px;
        width: 120px;
        border: 1px solid white;
        font-size: 17px;
        background-color: #7192c0;
        color: white;
        cursor: pointer;
`
const Image = styled.img`
    padding-left: 50px;
    height: 100%;
    width: 100%;
`
const ExtraMain = styled.div`
    margin: auto;
    text-align: center;
    gap: 15px;
    font-size: 25px;
    font-weight: 600;
    color: #474444;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
   
`
const Buttons = styled.button`
    /* padding: 10px; */
    margin-left: 40px;
    border-radius: 8%;
    font-size: 14px;
    height: 47px;
    width: 120px;
    cursor: pointer;
    background-color: white;
    color: black;
    font-weight: 600;

    
    &:hover{
        
        background-color: black;
        color: white;
        transition: 0.5s all ease-in-out;
    }

`

export default function About5() {
  return (
    <>
    <MainContainer>
        <TopContain>
            <LeftContain>
                <Image src="/src/assets/about7.avif"/>
            </LeftContain>
            <RightContain>
                <Heads>Enjoy Our Club</Heads>
                <Mid>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate nostrum nesciunt impedit, cumque excepturi numquam neque in et ipsum reprehenderit repellendus quibusdam esse laboriosam error doloremque, ut amet facere. Laboriosam!</Mid>
                <Button>Read More</Button>
            </RightContain>
        </TopContain>
    </MainContainer>
    <ExtraMain>
    Get desired outcome by taking action right now.
    <Buttons>SUBSCRIBE</Buttons>
    </ExtraMain>
    </>
  )
}
