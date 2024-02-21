import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Shops from './Shops'
import Filter from './Filter'
import { Button } from 'reactstrap'
import { BE_URL } from '../../../../../config'
import axios from 'axios'
import { FilterListOutlined } from '@mui/icons-material'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const HeaderTitle = styled.div`
    text-align: right;
    margin-right: 50px;
    font-size: 50px;
    font-weight: bold;
    padding: 30px;
`

export default function ShopsProduct({toggle}) {

  let [allProduct, setAllProduct] = useState([]);
    const[showOffCase, setShowOffCase] = useState(false);


    let [filter, setFilter] = useState({
      category: [],
      color: [],
      size: [],
      brand:[],
      gender: "",
      price: {
        lt: 0,
        gt: 0,
      },
    });
    console.log("-----------  filter----------->", filter);
  
    useEffect(() => {
      axios({
        method:"get",
        url: `${BE_URL}/product/getAll`,
        params:{...filter},
      })
        .then((res) => {
          console.log("-----------  res.data----------->", res.data);
          setAllProduct(res?.data?.data);
        })
        .catch((error) => toast.error(error.message));
    }, [filter]);


    const handleCase=()=>{
        setShowOffCase(!showOffCase);
    }

    const cartHandler = (cartID)=>{

    }
    useEffect(()=>{
      axios({
        method:"post",
        url:`${BE_URL}/cart/create/${cartID}`
      })
    })
    
  return (
    <>
       <div>
     <Button variant="primary" color='info'  onClick={handleCase}>
      <FilterListOutlined/>
          FILTER
        </Button>
        <Filter     handleCase={handleCase}
                    showOffCase={showOffCase} 
                    allShoseFilter={filter}
                    allShoseSetFilter={setFilter} />


        <HeaderTitle> New Arrivals</HeaderTitle>
    <Container>
        {allProduct.map(item=>(
            <Shops item={item} key={item.id} />
            ))}
    </Container>
            </div> 
    </>
  )
}
