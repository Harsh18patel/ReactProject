import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { sliderItems } from '../../../Data'
import './Slider.css'
import { Button } from 'reactstrap';
import styled from 'styled-components';

const Arrow = styled.div`
  width: 50px;
    height: 50px;
    background-color: #f0e7e7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${props =>props.direction === "left" && "10px"};
    right: ${props =>props.direction === "right" && "10px"};
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
`
const Wraper = styled.div`
  height: 100%;
  display: flex;
  transition: 1.5s all ease;
  transform: translateX(${props=>props.slideIndex * -101}vw);
`


export default function Slider() {

  const [slideindex, setSlideIndex] = useState(0);
  const handClick = (direction) =>{

    if(direction === "left")
    {
      setSlideIndex(slideindex > 0 ? slideindex-1 : 2)
    }
    else
    {
      setSlideIndex(slideindex < 2 ? slideindex + 1 : 0)
    }

  }
  return (
    <>
    <div className="sliderContainer">
        <Arrow direction="left" onClick={()=>handClick("left")} >
            <ArrowLeftOutlined/>
        </Arrow>

        <Wraper slideindex ={slideindex} >
             {sliderItems.map(item=>(
                <div className="Slide" bg={item.bg} key={item.id}>
                  <div className="ImgContainer">
                    <div className="Image">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div className="InfoContainer">
                    <div className='title'>{item.title}</div>
                    <Button>Enjoy Your Shop</Button>
                  </div>
                </div>
             ))}
        </Wraper>
        <Arrow direction="right" onClick={()=>handClick("right")} >
            <ArrowRightOutlined/>
         </Arrow>
    </div>
    </>
  )
}
