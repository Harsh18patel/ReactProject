import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./GendersItems.css";

export default function GenderItem() {
  return (
    <>
      <div className="ContainerItem">
        <div className="AboutPro">
          <div className="Desc">Welcome To Shose Shop</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          officia. Laboriosam modi nostrum natus, fuga amet minima assumenda!
          Aspernatur necessitatibus error odit mollitia nisi ad nam neque
          ratione laboriosam quia.
        </div>
        <div className="GenderWrap">

            <NavItem className="Pro">
          <div className="Navi">
              <NavLink className="Gen" to="/male">
                Male
              </NavLink>
              </div>


              <div className="Info">
                <img className="genderImg" src="/src/assets/men3.jpg" alt="" />
              </div>

            <div className="Navi">

              <NavLink className="Gen" to="/female">
                Female
              </NavLink>
            </div>

              <div className="Info">
                <img
                  className="genderImg"
                  src="/src/assets/female.jpg"
                  alt=""
                  />
              </div>

            <div className="Navi">

              <NavLink className="Gen" to="/kid">
                Kids
              </NavLink>
            </div>

              <div className="Info">
                <img className="genderImg" src="/src/assets/kids.jpg" alt="" />
              </div>
            </NavItem>
                  </div>
        </div>
      {/* </div> */}
    </>
  );
}
