import React, { useState } from 'react'
import { Button, Input, ModalBody } from 'reactstrap';
import ProductTable from './ProductTable';
import ProductModal from '../../../Modal/ProductModal';
import ProductForm from '../../../Form/ProductForm';
import { useNavigate } from 'react-router-dom';
import PaginationCom from '../../../Pagination/PaginationCom';

export default function AllProduct() {
  let[add, setAdd] = useState(false);
  // let[updateData, setUpdateData]= useState(false);

  let[totalCount, setTotalCount] = useState(0);
  let[pagination, setPagination] = useState({limit:10, page:1});

  const toggle = () => setAdd(!add);
  let navigate=useNavigate()
 function addProducthandler(){
  toggle()
  navigate("/admin-product")
  // setUpdateData(false);
 }
  return(
    <>

    <ProductModal modal={add} toggle={toggle} 
    
    />

    <div style={{ backgroundColor: "lightgrey" }} className="m-3 p-3">
        <div className="d-flex justify-content-end align-items-center">

    <Input className='w-25 me-2' placeholder={"Searct Your Product"} />
    <Button onClick={()=>addProducthandler()}>Add Product
    
    </Button>
      </div>
      <hr/>


      {/* <ProductForm updateData={updateData} setUpdateData={setUpdateData} toggle={toggle} /> */}
 
        <ProductTable pagination={pagination} setTotalCount={setTotalCount} toggle={toggle}   /> 

        <PaginationCom setPagination={setPagination} page={pagination?.page}
                       limit={pagination?.limit} pageLimit={Math.ceil(totalCount/10)} />


        </div>
    </>
  )
}
