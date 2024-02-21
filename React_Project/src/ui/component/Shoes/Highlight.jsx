import React from 'react'
import styled from 'styled-components'

const MainContain = styled.div`
padding-top: 150px;
display: flex;
margin: 10px;
margin-bottom: 50px;
    
`
const TopConatin = styled.div`
    padding: 10px;
    width: 25%;
`
const Heads = styled.div`
    text-align: center;
    font-weight: 600;
    color: #515050;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const CenterContain = styled.div`
    width: 50%;
    display: flex;
    padding: 10px;
 

   
`
const New = styled.div`
    margin-right: 100px;
`
const Top = styled.div`
    margin-left: 70px;
`

const EndContain = styled.div`
    padding: 10px;
    width: 25%;
`
const Info = styled.div`
    margin-top: 10px;
    padding: 10px;
    font-size: 26px;
    font-weight: 600;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
`
const Disc = styled.div`
    padding: 10px;
    margin-top: 20px;
    font-size: 16px;
    color: gray;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const Ending = styled.div`
    display: flex;
    
`
const End = styled.div`
    padding: 10px;
    font-size: 16px;
    color: gray;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`
const EndPoint = styled.div`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
`
const Batch = styled.div`
text-align: center;
    padding-top: 30px;
`
const Buttons = styled.button`
    height: 40px;
    width: 250px;
    border-radius: 10%;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid gray;
    background-color: black;
    color: white;
    
    &:hover{
        background-color: gray;
        color: black;
        transition: 0.5s all ease-in-out;

    }
`
const MainPro = styled.div`

color: gray;

`
const Images = styled.div`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

&:hover{
    color: black;
    transition: 1s all ease-in-out;
}
`
const Image = styled.img`
    height: 100px;
    width: 100px;
`
const ShoeName = styled.div`
    font-weight: 600;
    font-size: 15px;
    padding: 3px;
`

const One = styled.h2`
    font-size: 17px;
    padding: 3px;
    color: gray;
    &:hover{
        color: black;
        transition: 1s all ease-in-out;
    }
    `
const Extra = styled.div`
    
`
const EndLine = styled.hr`
height: 1px;
width: 100%;
background-color: grey;
margin-bottom: 50px;
`

export default function Highlight() {
    return (
        <>
            <MainContain>
                <TopConatin>
                    <Heads> POPULAR TAGS </Heads>
                    <Batch>

                        <Buttons>
                            ON SALE PRODUCTS(5)
                        </Buttons>
                    </Batch>
                    <Batch>

                        <Buttons>
                            VARIABLE PRODUCTS(12)
                        </Buttons>
                    </Batch>
                </TopConatin>

                <CenterContain>
                    <New>
                        <Heads>

                            NEW IN STORE
                        </Heads>
                        <MainPro>

                            <Images>
                                <Image src="/src/assets/snek1.jpg" />
                                <Extra>

                                    <ShoeName>Sneakers W Sport White</ShoeName>
                                    <One>$230.00</One>
                                </Extra>
                            </Images>
                            <Images>
                                <Image src="/src/assets/snek3.jpg" />
                                <Extra>

                                    <ShoeName>Sneakers W Sport White</ShoeName>
                                    <One>$230.00</One>
                                </Extra>
                            </Images>
                            <Images>
                                <Image src="/src/assets/snek5.jpg" />
                                <Extra>

                                    <ShoeName>Sneakers W Sport White</ShoeName>

                                    <One>$230.00</One>
                                </Extra>
                            </Images>
                            <Images>
                                <Image src="/src/assets/snek7.jpg" />
                                <Extra>

                                    <ShoeName>Sneakers W Sport White</ShoeName>

                                    <One>$230.00</One>
                                </Extra>
                            </Images>


                        </MainPro>
                    </New>

                    <Top>
                        <Heads>
                            TOP RATES PRODUCTS
                        </Heads>
                        <MainPro>
                            <Images>
                                <Image src="/src/assets/snek2.jpg" />
                                <Extra>

                                    <ShoeName>Sneakers W Sport White</ShoeName>

                                    <One>$230.00</One>
                                </Extra>
                            </Images>
                            <Images>
                                <Image src="/src/assets/snek4.jpg" />
                                <Extra>
                                    <ShoeName>Sneakers W Sport White</ShoeName>

                                    <One>$230.00</One>
                                </Extra>

                            </Images>
                            <Images>
                                <Image src="/src/assets/snek6.jpg" />
                                <Extra>
                                    <ShoeName>Sneakers W Sport White</ShoeName>

                                    <One>$230.00</One>
                                </Extra>
                            </Images>
                            <Images>
                                <Image src="/src/assets/snek8.jpg" />
                                <Extra>
                                    <ShoeName>Sneakers W Sport White</ShoeName>

                                    <One>$230.00</One>
                                </Extra>
                            </Images>

                        </MainPro>
                    </Top>
                </CenterContain>

                <EndContain>
                    <Heads>HELLO, SNEAKERS LOVERS</Heads>
                    <Info>
                    Step into a world of iconic footwear and discover the perfect pair to elevate your streetwear game.
                    </Info>
                    <Disc>
                    From classic designs to limited editions, we offer a curated selection of sneakers that blend fashion and functionality. Embrace your individuality and express your unique style with our collection of kicks. Get ready to walk the walk in style with us!
                    </Disc>
                    <Ending>
                        <End>

                    Sell better. Sell smarter.   
                        </End>
                        <EndPoint>

                    Get Shopkeeper →
                        </EndPoint>
                    </Ending>
                </EndContain>
            </MainContain>
            <EndLine></EndLine>
        </>
    )
}
