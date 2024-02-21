import React, { useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from "reactstrap";
import Select from "react-select";

const color = [
  "red",
  "black",
  "white",
  "blue",
  "gray",
  "pink",
  "brown",
  "skyBlue",
];

const category = [
  { value: "sports", label: "Sports" },
  { value: "casual", label: "Casual" },
  { value: "formal", label: "Formal" },
  { value: "party-wear", label: "Party Wear" },
  { value: "loafer", label: "Loafer" },
];
const brand = [
  { value: "nike", label: "Nike" },
  { value: "adidas", label: "Adidas" },
  { value: "puma", label: "Puma" },
  { value: "jordan", label: "Jordan" },
  { value: "sketchers", label: "Sketchers" },
  
];

const size = [
  42,43,44,45,46
]


export default function Filter({ showOffCase, handleCase,  allShoseFilter, allShoseSetFilter, }) {
  let [filter, setFilter] = useState(allShoseFilter);
  
  
  const sizeCheckBoxHandler = (size) => {
    let match = filter.size.includes(size);
    if (match) {
      let newArray = filter?.size?.filter((e) => e !== size);
      setFilter({ ...filter, size: newArray });
    } else {
      let newSizeArray = [...filter?.size, size];
      setFilter({ ...filter, size: newSizeArray });
    }
  };
  const colorCheckBoxHandler = (color) => {
    let match = filter.color.includes(color);
    if (match) {
      let newArray = filter?.color?.filter((e) => e !== color);
      setFilter({ ...filter, color: newArray });
    } else {
      let newSizeArray = [...filter?.color, color];
      setFilter({ ...filter, color: newSizeArray });
    }
  };
  
  const applyFilter = () => {
    allShoseSetFilter(filter);
  };


  const[value, setValue] = useState(0);


  const handleValue=(newValue)=>{
    setValue(newValue);
    // allShoseSetFilter({...allShoseFilter,allShoseFilter.price.lt})
    setFilter({...filter,price:{...filter.price,lt:newValue}})
  }


  return (
    <div style={{ zIndex: "1111111" }}>
      <Offcanvas toggle={handleCase} isOpen={showOffCase}>
        <OffcanvasHeader toggle={handleCase}>Filter</OffcanvasHeader>
        <OffcanvasBody>
        <Button style={{marginBottom:"30px"}} color="danger" onClick={applyFilter}>Apply Filter</Button>
          
            <Col>
              <Label style={{ fontWeight: "bold" , marginBottom:"20px",}}>
                Category
              </Label>
              <Select
                onChange={(arrObj) =>
                  setFilter({
                    ...filter,
                    category: arrObj?.map((ele) => ele.value),
                  })
                }
                isMulti={true}
                options={category}
              />
            </Col>
            <hr style={{marginBottom:"50px"}} />


            <Col>
              <Label style={{ fontWeight: "bold" , marginBottom:"20px",}}>
                  BRAND
              </Label>
              <Select
                onChange={(arrObj) =>
                  setFilter({
                    ...filter,
                    brand: arrObj?.map((ele) => ele.value),
                  })
                }
                isMulti={true}
                options={brand}
              />
            </Col>
            <hr style={{marginBottom:"50px"}} />


          <Col>
            <Row>
              <div className="d-flex justify-content-between">
                <span>
                  <b>0 .$</b>
                </span>
                <label htmlFor="" style={{ color: "red", fontWeight: "700" }}>
                  PRICE
                </label>
                <span>
                  <b>{value} .$</b>
                </span>
              </div>
              <input type="range" max={10000} min={0} value={value} onChange={(e)=>handleValue(e?.target?.value)} />
              <div className="d-flex justify-content-between">
                <span>
                  <b>min</b>
                </span>
                <span>
                  <b>max</b>
                </span>
              </div>
            </Row>
          </Col>
          <hr className="mb-5" />


          <Col >
            <label style={{ fontWeight: "bold" , marginBottom:"20px"}}>  COLOR
            </label>
          
      
            {color?.map?.((e, i) => {
              return (
                <div key={i} className="d-flex  gap-2 ">
                  <Input style={{backgroundColor:"#848383", height:"18px", width:"18px"}} type="checkbox" 
                  onChange={() => colorCheckBoxHandler(e)}  checked={filter?.color?.includes(e)}
                  />
                  <div
                    style={{
                      display: "inline-block",
                      textAlign:"center",
                      cursor:"pointer",
                      margin:"5px",
                      height: "20px",
                      width: "20px",
                      border: "0.3px solid gray",
                      borderRadius: "50%",
                      backgroundColor: e,
                    }}
                  ></div>
                  <span>{e}</span>
                </div>
              );
            })}
          </Col>
          <hr className="mb-5"/>

          <Col>
          <label style={{fontWeight:"bold" , marginBottom:"20px"}} htmlFor="">GENDER</label>
          
          <FormGroup>
            <FormGroup check>
              <Input style={{border:"1px solid black"}} type="radio"  name="radio1"   checked={filter?.gender === "male"}
                    onChange={() => setFilter({ ...filter, gender: "male" })} />
              <label>MALE</label>
            </FormGroup>

            <FormGroup check>
              <Input style={{border:"1px solid black"}} type="radio" name="radio1" checked={filter?.gender === "female"}
                    onChange={() => setFilter({ ...filter, gender: "female" })} />
              <label>FEMALE</label>
            </FormGroup>
            
            <FormGroup check>
              <Input style={{border:"1px solid black"}} type="radio" name="radio1"  checked={filter?.gender === "kids"}
                    onChange={() => setFilter({ ...filter, gender: "kids" })} />
              <label>KID</label>
            </FormGroup>
          </FormGroup>
          </Col>
          <hr className="mb-5" />

          <Col>
          <label htmlFor="" style={{fontWeight:"bold", marginBottom:"20px"}}>SIZE</label>
          {size?.map?.((e,i)=>{
            return(
              <div key={i}
              className="d-flex align-items-center gap-3 px-3 w-50">

                <Input type="checkbox" style={{backgroundColor:"#939393", height:"18px", width:"18px" , border:"1px solid gray", boxShadow:"none"}} 
                        onChange={() => sizeCheckBoxHandler(e)}  checked={filter?.size?.includes(e)} />

               
                <span>{e}</span>
              </div>
            );
          })}
          </Col>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}
