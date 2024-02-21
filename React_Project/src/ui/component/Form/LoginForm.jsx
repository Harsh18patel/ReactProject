import axios from "axios";
import React, { useState } from "react";
import "./BothCombine.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../redux/features/Auth/Auth";
import { toast } from "react-toastify";
import { BE_URL } from "../../../../config";

export default function LoginForm({ logs, setLogs, toggle }) {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitHandler() {
    axios({
      method: "post",
      url: `${BE_URL}/user/signin`,
      data: user,
    })
      .then((resData) => {
        // console.log("🚀 ~ file: LoginForm.jsx:28 ~ .then ~ resData:", resData)
        console.log("resCom---->", resData);
        dispatch(login(resData?.data));
        toast.success("Login Success..!");
        navigate("/");
        localStorage.setItem("login", "true");
        toggle();
      })
      .catch((err) => {
        console.log("err", err);
        toast.error(err.message);
      });
  };
  return (
    <>
      <div className="regContainer">
        <div className="regDetails">
          <h1 className="title">SIGN IN</h1>
          <div className="inputFields">
            <input
              className="fields"
              placeholder="username"
              name=""
              id=""
              onChange={(e) => setUser({ ...user, email: e?.target?.value })}
            />
            <input
              className="fields"
              placeholder="password"
              type="password"
              name=""
              id=""
              onChange={(e) => setUser({ ...user, password: e?.target?.value })}
            />
          </div>
          
          <button className="btn" onClick={submitHandler}>
            LOGIN
          </button>
          <div className="desc">
            <p
              onClick={() =>setLogs(!logs)}
              className="redirectToLogin"
              href=""
            >
              CREATE A NEW ACCOUNT
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
