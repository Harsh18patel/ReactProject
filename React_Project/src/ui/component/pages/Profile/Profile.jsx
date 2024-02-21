import { AccountCircle } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";

export default function Profile({toggle}) {

  // const [openSideCloseBar, setOpenCloseSideBar] = useState(false);



  return (
    <div className="me-5 ms-5 mt-2" style={{ width: "200px", height:"30px" }}>
       {/* <button style={{background:"white"}}
        onClick={() => (token ? toggle() : setOpenCloseSideBar(true))}
        className="pt-2 pb-2 ps-3 pe-3 rounded border-0 wishListBtn"
      >

<AccountCircle style={{fontSize:"33px"}}/>
      </button> */}
      <img
        className="mb-5"
        style={{ height: "100px", width: "100px", borderRadius: "50%" }}
        src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
        "
        alt=""
      />
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input
          type="text"
          // onChange={(e) => setRegData({ ...regData, name: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="text"
          // onChange={(e) => setRegData({ ...regData, email: e?.target?.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Mobile Number</Label>
        <Input
          type="text"
          // onChange={(e) =>
          //   setRegData({ ...regData, mobileNumber: e?.target?.value })
          // }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Password</Label>
        <Input
        // type="text"
        // onChange={(e) =>
        //   setRegData({ ...regData, password: e?.target?.value })
        // }
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Confirm Password</Label>
        <Input type="text" />
      </FormGroup>

      <Button
        className="d-inline-block mb-3 bg-black"
        color="secondary"
        // onClick={submitHandler}
      >
        Save Changes
      </Button>

      {/* <div
          className={
            openSideCloseBar
              ? "emptySideBarWish "
              : "emptySideBarWish emptySideBarNoneWish"
          }
          onClick={() => setOpenCloseSideBar(false)}
        ></div> */}
    </div>
  );
}

