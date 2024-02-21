import { LiveHelpOutlined, LocalMallOutlined, OutlinedFlagOutlined, RadioButtonChecked, RadioButtonCheckedOutlined, SelectAllOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const MainContain = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 10px;
    background-color: black;
    height: 550px;
`
const TopContain = styled.div`
    padding: 20px;
    margin-top: 130px;
`
const MidContain = styled.div`

`
const CenterContain = styled.div`
  display: flex;
  padding: 100px;
  margin-top: 100px;
`
const LowContain = styled.div`
`
const Case = styled.div`
`
const Heads = styled.div`
    font-size: 40px;
    color: white;
`
const Foots = styled.div`
    padding: 50px;
    margin-top: 60px;
    color: white;

`
const Expo = styled.div`
    color: white;
  
`
const Head = styled.div`
    padding: 15px;
    font-size: 25px;
    color: white;
`
const Com = styled.div`
  padding: 80px;
  color: white;

`
const Ipsum = styled.div`
    color: white;
  
`
const Invent = styled.div`
  padding: 80px;
  color: white;

`

export default function History() {
  return (
    <>
    <MainContain>
          <TopContain>
          <Case>

            <Heads>WhyChoose Us?</Heads>
          </Case>
           <Foots>
            <LocalMallOutlined style={{color:"blueviolet", fontSize:40}}/>
            <Head>
            Dolor Ex.
            </Head>
            Eiusmod magnam. Quisquam ea pulvinar dapibus leo.so autem and vitae for sed so quia quia.</Foots>
         </TopContain>


      <CenterContain>

        <MidContain>
              <Expo>
                <LiveHelpOutlined style={{color:"blueviolet", fontSize:40}}/>
                <Head> Explicabo.</Head>  

             Eaque commodi nostrum ullam vitae nor dolor. Magnam aperiam but esse quia so perspiciatis.
             </Expo>
             <Com>
              <OutlinedFlagOutlined style={{color:"blueviolet", fontSize:40}}/>
              <Head>Commodi.</Head>
              Corporis ullamco do exercitationem or iure. Enim nostrud or anim and exercitation. Quasi eiusmod magnam.
             </Com>
        </MidContain>


            <LowContain>
              <Ipsum>
                <SelectAllOutlined style={{color:"blueviolet", fontSize:40}}/>
                <Head>IPSUM.</Head>
              Ipsum. Quisquam eiusmod laboriosam autem. Aut ipsam. Occaecat laboriosam amet magna yet ex.
              </Ipsum>
              <Invent>
                <RadioButtonCheckedOutlined style={{color:"blueviolet", fontSize:40}}/>
                <Head>Inventore.</Head>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </Invent>
            </LowContain>

        </CenterContain>
    </MainContain>
    </>
  )
}
