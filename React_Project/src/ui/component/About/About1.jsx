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
    padding: 70px;
    `
const LeftContain = styled.div`
    height: 100%;
    width: 100%;
    padding: 70px;
    background-color: #9aa3c5;
    border-radius: 10%;
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
const RightImg = styled.div`
    padding-right: 100px;
    margin: auto;
`
const Image = styled.img`
    width: 150%;
    height: 450px;
`

export default function About1() {
  return (
    <>
    <MainContain>
        <TopContain>
            <RightConatin>
                <Hed>Our Latest </Hed>
                <Heds>Product...</Heds>
                <RightImg>

            <Image src="/src/assets/ab1.jpg"/>   
                </RightImg>
            </RightConatin>
            <LeftContain>
            <Hed>...With More </Hed>
            <Heds>Comfort</Heds>
            <Hedas>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur reiciendis, quasi , quia delectus, similique illo esse minus?</Hedas>
            </LeftContain>
        </TopContain>
    </MainContain>
    </>
  )
}
