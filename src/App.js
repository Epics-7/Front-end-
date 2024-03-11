import React from 'react';
import NavBar from './component/NavBar';
import Homepage from './pages/Homepage.js';

const MacBookAir = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        borderRadius: "10px",
        backgroundColor: "#f9fff8",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "50px 0px 110px",
        boxSizing: "border-box",
        gap: "69px 0px",
        letterSpacing: "normal",
      }}
    >
      <NavBar/>
      <Homepage/>
    </div>
  );
};

export default MacBookAir;
