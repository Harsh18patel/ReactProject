import React from 'react'
import styled from 'styled-components'

const MainContain = styled.div`
  
    margin: 50px;
    padding-bottom: 250px;

`
const TopContain = styled.div`
    display: flex;
    height: 600px;
    width: 100%;
`
const RightConatin = styled.div`
    height: 100%;
    width: 100%;
    background-color: #d9b785;
    padding: 70px;
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

export default function About2() {
  return (
    <>
     <MainContain>
        <TopContain>
            <RightConatin>
                <Hed>Friendly Shapes</Hed>
                <Heds>Product...</Heds>
                <Hedas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur reiciendis, quasi , quia delectus, similique illo esse minus?</Hedas>
            </RightConatin>
            <LeftContain>
            <Hed>And Soft</Hed>
            <Heds>Materials</Heds>
            <LeftImg>

            <Image src="/src/assets/ab2.jpg"/>   
            </LeftImg>
            </LeftContain>
        </TopContain>
    </MainContain>
    </>
  )
}
