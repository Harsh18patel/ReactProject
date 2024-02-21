import axios from "axios";
import React, { useState } from "react";
import "./BothCombine.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { BE_URL } from "../../../../config";
import { login } from "../../../redux/features/Auth/Auth";
import { useNavigate } from "react-router-dom";


export default function RegisterForm({ logs , setLogs,toggle }) {
  console.log("Type of setLogs:", setLogs);
  let[registerData, setRegisterData] = useState(
        {
          name: "",
          lastName: "",
          email: "",
          age:"",
          password: "",
          confirmPassword: "",
        }
  )
    
  

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    
    
    function submitHandler() {
  
      axios({
        method:"post",
        url: `${BE_URL}/user/signUp`,
        data: registerData,
      })
      .then((resData)=>{
        dispatch(login(resData?.data));
        toast.success("Register Successfull");
        navigate("/");
        localStorage.setItem("login", "true");
        toggle();
      })
      .catch((err)=>{
        console.log(err);
        toast.error(err.message);
      });
      
      
    }


  return (
    <div className="regContainer">
      <form >

      <div className="regDetails">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <div className="inputFields">
          <input className="fields" placeholder="first name" name="" id="" onChange={(e)=>setRegisterData({...registerData,name: e?.target?.value})} />
          <input className="fields" placeholder="last name" name="" id="" onChange={(e)=>setRegisterData({...registerData,lastName: e?.target?.value})} />
          <input className="fields" placeholder="email" name="" id="" onChange={(e)=>setRegisterData({...registerData,email: e?.target?.value})} />
          <input className="fields" placeholder="age" name="" id="" onChange={(e)=>setRegisterData({...registerData,age: e?.target?.value})} />
          <input className="fields" placeholder="password" type="password" name="" id="" onChange={(e)=>setRegisterData({...registerData, password: e?.target?.value})} />
          <input
            className="fields"
            placeholder="confirm password"
            name=""
            id=""
            type="password"
            onChange={(e)=>setRegisterData({...registerData, confirmPassword: e?.target?.value})}
            />
        </div>

        <div className="desc">
          By creating an account. I connect the processing of my personal data
          in accordance with the{" "}
          <b style={{ color: "black" }}>PRIVACY POLICY</b>
        </div>

        <button className="btn" onClick={submitHandler}>CREATE</button>

      </div>

      <p className="redirectToLogin" onClick={()=>setLogs(!logs)}>
        Do you have already account?
      </p>
      
      </form>
    </div>
  );
}
