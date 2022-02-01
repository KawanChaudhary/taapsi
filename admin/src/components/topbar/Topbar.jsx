import React from "react";
import { Redirect } from "react-router-dom";
import "./topbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";

export default function Topbar() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">taapsi. Admin Panel</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <button className="logout" onClick={handleClick}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
