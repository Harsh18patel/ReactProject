import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { BE_URL } from "../../../../config";
import { toast } from "react-toastify";
import { useParams, useSearchParams } from "react-router-dom";
import Select from "react-select";

const intialData = {
  title: "",
  description: "",
  price: "",
  discountPercentage: "",
  stock: "",
  thumbnail: "",
  gender: "",
  brand: [],
  category: [],
  color: [],
  size: [],
};

const InputCom = ({ field, type, setData, data }) => {
  return (
    <FormGroup>
      <Label style={{ textTransform: "capitalize" }} for={field} >
        {field}
      </Label>
      <Input
        onChange={(e) => setData({ ...data, [field]: e?.target?.value })}
        value={data?.[field]}
        id={field}
        placeholder={`Enter your ${field}`}
        type={"text" || type}
      />
    </FormGroup>
  );
};

const productForm = [
  { field: "title" },
  { field: "description" },
  { field: "thumbnail" },
  { field: "stock" },
  { field: "discountPercentage" },
  { field: "price" },
];

const brandOptions = [
  
    { value: "nike", label: "Nike" },
    { value: "adidas", label: "Adidas" },
    { value: "puma", label: "Puma" },
    { value: "jordan", label: "Jordan" },
    { value: "sketchers", label: "Sketchers" },
  
]

const categoryOptions = [
  { value: "sports", label: "Sport" },
  { value: "casual", label: "Casual" },
  { value: "formal", label: "Formal" },
  { value: "lofer", label: "Lofer" },
  { value: "party-wear", label: "Party Wear" },
];

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" },
  { value: "gray", label: "Gray" },
  { value: "blue", label: "Blue" },
];

export default function ProductForm({ toggle }) {
  const [product, setProduct] = useState(intialData);

  let [searchParams] = useSearchParams();
  // let id = searchParams.get("id") || 'defaultId';
  const {id} = useParams();

  console.log("id",id);


  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}/product/getProductById/${id}`,
    }).then((res) => {
      setProduct(res?.data?.data);
    });
  }, [id]);

 


  const token = useSelector((state) => state?.authReducer?.token);


  const handleCheck = (e)=>{
    const { checked, value} = e.target || {};
    
    
    if( value !== undefined ) {
  //     //  console.log("🚀 ~ cuur pro size", product.size);
  //     //  console.log("Checkbox value:", value);
  //     //  console.log("Checkbox checked:", checked);


       let newArr = [...product?.size];
       if (checked && !newArr.includes(value)) {
         newArr.push(value);
       } else {
         newArr = newArr?.filter((item) => item !== value);
       }
       setProduct({ ...product, size: newArr });
      }
    };

  const submitHandler = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${BE_URL}/product/create`,
      data: product,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        toast.success("Product added successfully");
        console.log("----success---", res);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log("----errr--", err);
      });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `${BE_URL}/product/update/${id}`,
      data: product,
    })  
      .then((res) => {
        toast.success("Product Update successfully");
        console.log("----update Success--", res);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log("---err---", err);
      });
  };

 
  // console.log(product?.size);
  // console.log("meet", product?.size?.includes(42));
  return (
    <>
      <Form>
        {productForm.map((ele) => {
          return <InputCom {...ele} setData={setProduct} data={product} />;
        })}

        <label>Gender</label>
        <FormGroup tag="fieldset" className="d-flex gap-3">
          <FormGroup check>
            <Input
              onChange={() => setProduct({ ...product, gender: "male" })}
              type="radio"
              checked={product?.gender === "male"}
            />

            <Label>Male</Label>
          </FormGroup>

          <FormGroup check>
            <Input
              onChange={() => setProduct({ ...product, gender: "female" })}
              type="radio"
              checked={product?.gender === "female"}
            />
            <Label>Female</Label>
          </FormGroup>

          <FormGroup check>
            <Input
              onChange={() => setProduct({ ...product, gender: "kids" })}
              type="radio"
              checked={product?.gender === "kids"}
            />
            <Label>Kids</Label>
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <label>Category</label>
          <Select
            isMulti
            name="category"
            onChange={(e) =>
              setProduct({ ...product, category: e.map((ele) => ele.value) })
            }
            options={categoryOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </FormGroup>

        <FormGroup>
          <label>Brand</label>
          <Select
            isMulti
            name="brand"
            onChange={(e) =>
              setProduct({ ...product, brand: e.map((ele) => ele.value) . join(",") })
            }
            options={brandOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </FormGroup>

        <FormGroup>
          <label>Color</label>
          <Select
            isMulti
            name="color"
            onChange={(e) =>
              setProduct({ ...product, color: e.map((ele) => ele.value) })
            }
            options={colorOptions}
            className="basic-multi-select"
            classNamePrefix="selct"
          />
        </FormGroup>

        <FormGroup>
          <label>Size</label>

          <div className="d-flex mb-4">
            <div className="w-25">
              <FormGroup>
                <Input
                  type="checkbox"
                  value="42"
                  checked={product?.size?.includes("42")}
                  onChange={(e) => handleCheck(e.target)}
                />
                <Label check>42</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  type="checkbox"
                  value="43"
                  checked={product?.size?.includes("43")}
                  onChange={(e) => handleCheck(e.target)}
                />
                <Label check>43</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  type="checkbox"
                  value="44"
                  checked={product?.size?.includes("44")}
                  onChange={(e) => handleCheck(e.target)}
                />
                <Label check>44</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  type="checkbox"
                  value="45"
                  checked={product?.size?.includes("45")}
                  onChange={(e) => handleCheck(e.target)}
                />
                <Label check>45</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  type="checkbox"
                  value="46"
                  checked={product?.size?.includes("46")}
                  onChange={(e) => handleCheck(e.target)}
                />
                <Label check>46</Label>
              </FormGroup>
            </div>
          </div>
        </FormGroup>



        <Button
          onClick={(e) => submitHandler(e)}
          color="danger"
          className="w-100 m-1"
        >
          BUY NOW
        </Button>

        <Button
          onClick={(e) => updateHandler(e)}
          color="danger"
          className="w-100 m-1"
        >
          Update
        </Button>
      </Form>
    </>
  );
}
