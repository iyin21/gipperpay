import Header from "./Header";
import MainView from "./MainView";
import Sidenav from "./Sidenav";

function Dashboard({setActiveLink, activeLink}) {
  return (
    <div className=" w-full relative lg:min-h-[120vh] ">
      <Header activeLink={activeLink} setActiveLink={setActiveLink}/>
      <Sidenav activeLink={activeLink} setActiveLink={setActiveLink} />
      <MainView activeLink={activeLink}/>
    </div>
  );
}

export default Dashboard;
