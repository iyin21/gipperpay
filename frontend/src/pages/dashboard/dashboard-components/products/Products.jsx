import React, { useState, useEffect } from "react";
import { FaWallet, FaLink } from "react-icons/fa";
import PrimaryButton from "../../../../widgets/buttons/PrimaryButton";
import EmptyState from "./components/emptyState";
import { useNavigate } from "react-router-dom";
import ProductCard from "./components/productCard";
import { GucciBag, Naira, link } from "../../../../assets";

const Products = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const products = [
    {
      image: GucciBag,
      name: "Gucci Bag",
      price: "$4000.00",
      itemsLeft: 0,
      description: "the description of the product would be Displayed Here",
    },
    {
      image: Naira,
      name: "Product Name",
      price: "$0.00",
      itemsLeft: 0,
      description: "the description of the product would be Displayed Here",
    },
    {
      image: Naira,
      name: "Product Name",
      price: "$0.00",
      itemsLeft: 0,
      description: "the description of the product would be Displayed Here",
    },
    {
      image: Naira,
      name: "Product Name",
      price: "$0.00",
      itemsLeft: 0,
      description: "the description of the product would be Displayed Here",
    },
  ];
  return (
    <div>
      <div className="flex-col lg:flex-row flex pl-8 min-h-screen">
        {screenWidth < 992 && (
          <div className="w-full lg:w-[35%] lg:bg-white-60 rounded-sm py-4 pr-8">
            <div className="flex gap-4 h-auto items-center">
              <div>
                <div className="w-[30px] h-[30px] flex items-center m-auto rounded-full justify-center bg-primaryLight">
                  <FaWallet color="#FA3C12" />
                </div>
              </div>
              <p className="font-medium text-secondary-main text-s leading-4">
                Wallet
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <p className="text-white-30 text-s font-regular leading-5">
                  Amount received
                </p>
                <p className="font-big text-secondary-main text-sm leading-6">
                  $0.00
                </p>
              </div>
              <div>
                <PrimaryButton content="Payout" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center py-[20px] px-[10px] gap-[20px] w-[100%] h-[90px] bg-[#f7f5f5] mt-4 rounded-lg flex-grow-0">
              <div className="flex items-center ml-5">
                <div className="flex justify-center items-center rounded-[50%] bg-[#fcfbfb] w-[50px] h-[50px]">
                  <FaLink color="#FA3C12" />
                </div>
                <div className="ml-5">
                  <p className="font-jost font-[500] text-[19px] leading-[27px]">
                    Payment Link
                  </p>
                  <p className="font-jost font-[400] text-[16px] leading-[23px] text-[#7b7b7b]">
                    {products.length} product{products.length > 1 ? "s" : ""}{" "}
                    active
                  </p>
                </div>
              </div>
              <button className="bg-[#fed8d0] rounded py-[5px] px-[20px]">
                <span
                  className="font-jost font-[400] text-[16px] leading-[23px] text-[#fa3c12]"
                  onClick={() => navigate("/payment-link")}
                >
                  Create Link
                </span>
              </button>
            </div>
          </div>
        )}
        <div className="w-full lg:w-[65%] ">
          <p className="font-medium text-l leading-10">My Products</p>

          {products.length > 0 ? (
            <div className="grid gap-10 md:grid-cols-2 lg:mr-10 my-4 mr-8">
              {products.map((item, index) => (
                <ProductCard
                  key={index}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  itemsLeft={item.itemsLeft}
                  description={item.description}
                  handleClick={() => navigate("/store")}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
        {screenWidth > 992 && (
          <div className="w-full lg:w-[35%] lg:bg-white-60 rounded-sm pt-4 pr-8">
            <div className="flex gap-4 h-auto items-center">
              <div>
                <div className="w-[30px] h-[30px] flex items-center m-auto rounded-full justify-center bg-primaryLight">
                  <FaWallet color="#FA3C12" />
                </div>
              </div>
              <p className="font-medium text-secondary-main text-s leading-4">
                Wallet
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <p className="text-white-30 text-s font-regular leading-5">
                  Amount received
                </p>
                <p className="font-big text-secondary-main text-sm leading-6">
                  $0.00
                </p>
              </div>
              <div>
                <PrimaryButton content="Payout" />
              </div>
            </div>
            <div className="flex flex-row justify-between items-center py-[20px] px-[10px] gap-[20px] w-[100%] h-[90px] bg-[#f7f5f5] mt-4 rounded-lg flex-grow-0">
              <div className="flex items-center ml-5">
                <div className="flex justify-center items-center rounded-[50%] bg-[#fcfbfb] w-[50px] h-[50px]">
                  <FaLink color="#FA3C12" />
                </div>
                <div className="ml-5">
                  <p className="font-jost font-[500] text-[19px] leading-[27px]">
                    Payment Link
                  </p>
                  {products.length === 0 ? (<p className="font-jost font-[400] text-[16px] leading-[23px] text-[#7b7b7b]">No active product !</p>) :(<p className="font-jost font-[400] text-[16px] leading-[23px] text-[#7b7b7b]">
                    {products.length} product{products.length > 1 ? "s" : ""} active
                  </p>)}
                </div>
              </div>
              <button className="bg-[#fed8d0] rounded py-[5px] px-[20px]">
                <span
                  className="font-jost font-[400] text-[16px] leading-[23px] text-[#fa3c12]"
                  onClick={() => navigate("/payment-link")}
                >
                  Create Link
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
