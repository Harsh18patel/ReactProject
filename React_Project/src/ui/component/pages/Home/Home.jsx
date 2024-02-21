import React from 'react'
import Slider from '../../Slider/Slider';
import Categories from '../../Category/Categories';
import PopularArrivalShoe from '../../Shoes/PopularArrivalShoe';
import TrendingShoes from '../../Shoes/TrendingShoes';
import History from '../../About/History';
import OutletProduct from '../../Shoes/OutletProduct';
import About2 from '../../About/About2';
import About3 from '../../About/About3';
import About4 from '../../About/About4';
import About5 from '../../About/About5';
import Highlight from '../../Shoes/Highlight';
import GenderItem from '../../Category/GenderItem';

export default function Home() {
  return (
    <>
  

    <Slider/>
    <Categories/>
    <GenderItem/>
    {/* <ShopsProduct/> */}
    <PopularArrivalShoe/>
    <TrendingShoes/>
    <History/>
    {/* <TopSale/> */}  
    <OutletProduct/>
    {/* <About1/> */}
    <About2/>
    <About3/>
    <About4/>
    <About5/>
    <Highlight/>
    
    </>
  )
}
