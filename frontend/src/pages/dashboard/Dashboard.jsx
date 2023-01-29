import { useState } from "react";
import Header from "./Header";
import MainView from "./MainView";
import Sidenav from "./Sidenav";

function Dashboard() {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <div className="w-full min-h-[120vh] relative">
      <Header/>
      <Sidenav activeLink={activeLink} setActiveLink={setActiveLink} />
      <MainView activeLink={activeLink} />
    </div>
  );
}

export default Dashboard;
