import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainScreen = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <Header getIsActive={(e)=>setIsActive(e)} />
      <Sidebar barActive={isActive} />
    </>
  );
};

export default MainScreen