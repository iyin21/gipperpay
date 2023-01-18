import { useState } from "react";
import MainView from "./MainView";
import Sidenav from "./Sidenav";

function Dashboard() {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className="w-full min-h-screen relative">
      <Sidenav activeLink={activeLink} setActiveLink={setActiveLink} />
      <MainView activeLink={activeLink} />
    </div>
  );
}

export default Dashboard;
