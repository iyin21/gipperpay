import React, { useState } from "react";
import Main from "./components/Main";
import Tab from "./components/Tab";

function Settings() {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className=" w-full h-full p-[1.25rem] mt-[-2.5rem] lg:mt-[0]  ">
      <Tab activeLink={activeLink} setActiveLink={setActiveLink} />
      <Main activeLink={activeLink} />
    </div>
  );
}

export default Settings;
