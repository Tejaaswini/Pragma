import React from "react";

const Instructions = () => {
  return (
    <div className="container" style={{ width: "100%" }}>
      <div className={"card medium white darken-1"} style={{borderRadius:"10px",boxShadow: "10px 10px 8px #888888"}}>
        <div className="card-content ">
          <span className="card-title" style={{fontWeight:"600", color:"black", fontSize:"30px"}}>How to!</span>
          <h5 style={{color:"black"}}>Click here to check out the FAQ</h5>
          <h5 style={{color:"black", marginTop:"5vh"}}>We have tried to answer all the questions that would pop to you.</h5>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
