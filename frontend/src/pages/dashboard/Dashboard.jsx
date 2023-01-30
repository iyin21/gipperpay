import { useState } from "react";
import Header from "./Header";
import MainView from "./MainView";
import Sidenav from "./Sidenav";

function Dashboard() {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className="min-h-[180vh] w-full relative lg:min-h-[120vh] ">
      <Header/>
      <Sidenav activeLink={activeLink} setActiveLink={setActiveLink} />
      <MainView activeLink={activeLink} />
    </div>
  );
}

export default Dashboard;
