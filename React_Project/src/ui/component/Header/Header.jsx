import {
  AccountCircle,
  Favorite,
  FavoriteBorder,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Badge } from "@mui/material";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalHeader, Nav, NavItem } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/Auth/Auth";
import LoginForm from "../Form/LoginForm";
import RegisterForm from "../Form/RegisterForm";
// import Profile from "../pages/Profile/Profile";

export default function Header({setLogs, logs}) {
  
  const [modal, setModal] = useState(false);

  const toggle = () => {
    console.log("Toggling modal");
    setModal(!modal);
    setLogs(true);
  };
  
  let dispatch = useDispatch();
  let navigate = useNavigate();

 



  const userData = useSelector((state) => state?.authReducer);

  // console.log("user----------->", userData);

  function logOuthandler() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <>
      <HeaderContianer >
        <div className="HeaderWraper">
          <Nav>
            {userData?.user?.userType === "admin" ? (
              <>
                <NavItem className="HeaderAdmin">
                  <NavLink className="HeaderAdminMenu" to="/">
                    DashBoard
                  </NavLink>
                  <NavLink className="HeaderAdminMenu" to="/admin-product">
                    Product
                  </NavLink>
                  <NavLink className="HeaderAdminMenu" to="/order">
                    Order
                  </NavLink>
                  <NavLink className="HeaderAdminMenu" to="/users">
                    Users
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem className="HeaderLeft">
                  <NavLink className="HeaderLeftMenu" to="/">
                    Home
                  </NavLink>
                  <NavLink className="HeaderLeftMenu" to="/shops">
                    Shop
                  </NavLink>
                  <NavLink className="HeaderLeftMenu" to="/aboutus">
                    About US
                  </NavLink>
                  <NavLink className="HeaderLeftMenu" to="/contact">
                    Contact US
                  </NavLink>
                  <NavLink className="HeaderLeftMenu" to="/sale">
                    Sale
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
                {/* <NavLink className="HeaderCenter" to="/">
                  <div className="HeaderLogo">JORDAN</div>
                  <img src="/src/assets/logoimg-removebg-preview.png" />
                </NavLink> */}

                <NavLink to="/">
                  <div className="HeaderCenter">
                    <div className="HeaderLogo">JORDAN</div>
                    <img src="/src/assets/logoimg-removebg-preview.png" alt="Logo" />
                  </div>
                </NavLink>  


            

          <div className="HeaderRight">

            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                {logs ? "LoginForm" : "RegisterForm"}
              </ModalHeader>
              <ModalBody>
                {logs ? (
                  <LoginForm
                  
                    logs={logs}
                    setLogs={setLogs}
                    toggle={toggle}
                  />
                ) : (
                  <RegisterForm
                  logs={logs}
                  setLogs={setLogs}
                  toggle={toggle}
                  />

                )}
              </ModalBody>
            </Modal>

            <div className="HeaderMenuItem">
              {userData?.token !== "" ? (
                <Button
                  style={{
                    height: "50px",
                    width: "100px",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  variant="danger"
                  onClick={()=>logOuthandler()}
                >
                  LogOut
                </Button>
              ) : (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Button
                    style={{
                      height: "50px",
                      width: "100px",
                      fontSize: "22px",
                      fontWeight: "600",
                      backgroundColor:"white",
                      color:"black",
                      border:"0px solid ",
                    }}
                    onClick={toggle}
                  >
                    LOGIN
                  </Button>
                </div>
              )}
            </div>

            <div className="HeaderMenuItem" style={{ cursor: "pointer" }}>
              <Badge  color="secondary">
                {/* <Cart/> */}
                {/* <ShoppingCartOutlined style={{ fontSize: "26px" }}/> */}
                
              </Badge>
            </div>

            <div className="HeaderMenuItem" style={{ cursor: "pointer" }}>
              <Badge  color="secondary">
                {/* <WishList toggle={toggle}/> */}
              </Badge>
            </div>

            <div className="HeaderMenuItem" style={{ cursor: "pointer", alignItems:"center", marginTop:"7px" }}>
              <Badge  color="secondary">
                <NavLink to="/profile" >

                <AccountCircle  style={{fontSize:"33px"}}/>
                </NavLink>
                {/* <Profile toggle={toggle} /> */}
              </Badge>
            </div>

           
          </div>
        </div>
      </HeaderContianer>
    </>
  );
}
const HeaderContianer = styled.div`
  padding: 5px 30px;
  position: sticky;
  z-index: 11;
  top: 0;
  background-color: #ffffff;
  .HeaderWraper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .HeaderLeft {
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      font-size: 18px;
      font-weight: 500;
      .HeaderLeftMenu {
        color: black;
        text-decoration: none;
        &:hover {
          color: #9de114;
          transition: 1s all ease-in-out;
        }
      }
    }

    .HeaderAdmin {
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      font-size: 18px;
      font-weight: 500;

      .HeaderAdminMenu {
        color: black;
        text-decoration: none;

        &:hover {
          color: #9de114;
          transition: 1s all ease-in-out;
        }
      }
    }

    .HeaderRight {
      display: flex;
      align-items: center;
      gap: 20px;

      .HeaderSerachContainer:hover {
        color: #dc1111;
        transition: 0.5s all ease-in-out;
      }

     
    }

    .HeaderCenter {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      img {
        height: 70px;
        width: 100%;
      }
      .HeaderLogo {
        font-size: 50px;
        font-weight: 500;
        color: black;
        cursor: pointer;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        &:hover {
          color: #ce2f2f;
          transition: 0.5s all ease-in-out;
        }
      }
    }
  }
`;
