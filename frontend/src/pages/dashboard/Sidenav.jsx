import { Link } from "react-router-dom";
import {
  buy,
  buyActive,
  donateActive,
  donations,
  gipperfi,
  gipperfiActive,
  logo,
  overview,
  overviewInactive,
  payroll,
  payrollActive,
  productActive,
  products,
  settings,
  settingsActive,
  transactionActive,
  transactions,
} from "../../assets";

function Sidenav({ activeLink, setActiveLink }) {
  console.log(activeLink);

  const handleActiveLink = (i) => {
    setActiveLink(i);
  };
  const links = [
    {
      img: overviewInactive,
      imgActive: overview,
      linkTitle: "Overview",
    },
    {
      img: buy,
      imgActive: buyActive,
      linkTitle: "Buy & Sell",
    },
    {
      img: gipperfi,
      imgActive: gipperfiActive,
      linkTitle: "Gipperfi",
    },
    {
      img: donations,
      imgActive: donateActive,
      linkTitle: "Donations",
    },
    {
      img: payroll,
      imgActive: payrollActive,
      linkTitle: "Payroll",
    },
    {
      img: products,
      imgActive: productActive,
      linkTitle: "Products",
    },
    {
      img: transactions,
      imgActive: transactionActive,
      linkTitle: "Transactions",
    },
    {
      img: settings,
      imgActive: settingsActive,
      linkTitle: "Settings",
    },
  ];
  return (
    <div className="hidden w-1/5 fixed top-0 left-0 min-h-screen bg-white-Main px-8 py-5 lg:block">
      <header className="w-full h-10">
        <Link to='/'><img src={logo} alt="" className="object-contain" /></Link>
      </header> 
      <div>
        {links.map((link, i) => (
          <div
            className={`w-full flex justify-start gap-4 py-4 cursor-pointer font-regular ${
              activeLink === i ? "text-red-500" : "text-white-30"
            }`}
            key={i}
            onClick={() => handleActiveLink(i)}
          >
            <span>
              <img
                src={activeLink === i ? link.imgActive : link.img}
                className="text-red-500"
                alt=""
              />
            </span>
            <span className="text-s font-regular">{link.linkTitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidenav;
