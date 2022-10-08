import React from "react";
import "./Thanks.css";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
const Thanks = () => {
  const navigate = useNavigate();
  return (
    <div className="main-thanks-page">
      <div>
        <CheckCircleOutlineIcon />
        <h2>Thank You For Shopping with Us</h2>
      </div>
      <h3>You will receive order updates via email</h3>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Thanks;
