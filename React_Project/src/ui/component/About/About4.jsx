import React from 'react'
import styled from 'styled-components'


const MainContain = styled.div`
  
    margin: 50px;
    padding-bottom: 150px;


`
const TopContain = styled.div`
    display: flex;
    height: 600px;
    width: 100%;
`
const RightConatin = styled.div`
    height: 100%;
    width: 100%;
    padding: 70px;
    background-color: #9abcc5;
    border-radius: 10%;
    `
const LeftContain = styled.div`
    height: 100%;
    width: 100%;
    padding: 70px;
`
const Hed = styled.div`
    font-size: 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:#545344;
    font-weight: bold;
`
const Heds = styled.div`
    font-size: 50px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:#545344;
    font-weight: bold;

`
const Hedas = styled.div`
    margin-top: 70px;
    font-size: 21px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    padding-right: 200px;
`
const LeftImg = styled.div`
    
`
const Image = styled.img`
    

`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    transition:  all 0.5s ease-in;
    cursor: pointer;
    font-weight: 600;
    background-color: white;
    color: black;
    
    &:hover{
        background-color: black;
        color: white;
        transition: 0.5s all ease-in-out;
    }
`
export default function About4() {
  return (
    <>
         <MainContain>
        <TopContain>
            <RightConatin>
                <Hed>Comfortable </Hed>
                <Heds>And...</Heds>
            <Hedas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur reiciendis, quasi , quia delectus, similique illo esse minus?</Hedas>
            </RightConatin>
            <LeftContain>
            <Hed>Attractive </Hed>
            <Heds>Designs.</Heds>
            <LeftImg>

            <Image src="/src/assets/AB4.jpg"/>   
            </LeftImg>
            </LeftContain>
        </TopContain>
    </MainContain>
    <Button>Shop Now</Button>
    </>
  )
}
