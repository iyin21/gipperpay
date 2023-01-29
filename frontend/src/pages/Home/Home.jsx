import React from "react";

//icons
import {
  questionmark,
  rightarrow,
  rightarrow2,
  mark,
  mail,
  bookmark,
} from "../../icons";

//assets
import {
  walletpic,
  checkout,
  cart,
  payrollpic,
  gipperfi_1,
  bankPayouts,
  apipic2,
  apipic3,
  ellipse,
  gipperpaylogo,
  gipperfiActive,
  bankPayouts2,
  frame31,
  handspics,
  forindivualspic,
} from "../../assets/index";

function Home() {
  return (
    <div className="w-screen h-[5560px] ">
      {/**Big header */}

      <div className="w-screen h-[600px] bg-white-70 flex flex-row">
        <div className="w-[708px] h-[323px] mt-[108px] ml-[100px] ">
          <h1 className="w-[708px] h-[184px] font-Jost not-italic font-big text-4xl leading-[92px]  text-secondary-main flex  items-center  ">
            Take control of your business and payment
          </h1>
          <h1 className="w-[661px] h-[54px] font-Jost not-italic font-regular text-sm leading-[27px] text-white-30 mt-[20px] items-center ">
            Allow your business to accept payment online and offline, build
            financial products, sell online, stay compliant and grow your
            revenue
          </h1>
          <div className="w-[353px] h-[45px] flex flex-row items-start mt-[20px] ">
            <h1 className="w-[185px] h-[45px] rounded-[5px] bg-Rectangle justify-center items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px] font-Jost not-italic font-regular text-s leading-[23px] text-white-60 ">
              Create a free account
            </h1>
            <div className="w-[148px] h-[45px] ml-[20px] rounded-[5px] flex flex-row items-center justify-center ">
              <img src={questionmark} alt="" className="w-[20px] h-[20px] " />
              <h1 className=" w-[96px] h-[23px] font-Jost not-italic text-s leading-[23px] text-center text-Rectangle ml-[12px] ">
                Speak to sales
              </h1>
            </div>
          </div>
        </div>
        <img src={handspics} alt="" className="object-contain" />
      </div>

      {/** what we offer  */}

      <div>
        <div className="w-[444px] h-[146px] mt-[60px]  ml-[498px] mr-[498px] ">
          <h1 className="w-[378px] h-[80px] text-secondary-main text-center items-center font-Jost font-big not-italic text-l leading-[40px] ml-[33px] ">
            A fully compliant collection of payment Tools
          </h1>
          <h1 className="w-[444px] h-[46px] font-Jost not-italic text-s leading-[23px] text-secondary-30 text-center  mt-[20px] ">
            Building a business can be inflexible, we believe getting paid
            should be flexible
          </h1>
        </div>
        <div className="w-[990px] h-[700px] mt-[60px] ml-[225px] mb-[60px] ">
          <h1 className="w-[187px] h-[40px] ml-[401px] mb-[20px] font-Jost not-italic font-big text-l leading-[40px] items-center text-secondary-main ">
            What we offer
          </h1>
          <div className="w-[990px] h-[640px] grid grid-18px-css gap-x-[60px] gap-y-[40px] rounded-[10px] ">
            <div className="border-t-[2px] border-Rectangle rounded-[10px] shadow-md pt-[40px] pl-[20px] ">
              <img src={walletpic} alt="" className="w-[50px] h-[50px] " />
              <h1 className="w-[135px] h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
                Business wallet
              </h1>
              <h1 className="w-[229px] h-[69px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
                Get fitted with a secured wallet to accept and manage your
                crypto all in one place.
              </h1>
            </div>
            <div className="border-t-[2px] border-Rectangle rounded-[10px] shadow-md pt-[40px] pl-[20px] ">
              <img src={checkout} alt="" className="w-[50px] h-[50px] " />
              <h1 className="w-[84px] h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
                Checkout
              </h1>
              <h1 className="w-[229px] h-[115px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
                Give your customers a chance to pay with crypto. It's designed
                to grow your earnings and deliver the best payment experience
                for your customers
              </h1>
            </div>
            <div className="border-t-[2px] border-Rectangle rounded-[10px] shadow-md pt-[40px] pl-[20px] ">
              <img src={payrollpic} alt="" className="w-[50px] h-[50px] " />
              <h1 className="w-[61px] h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
                Payroll
              </h1>
              <h1 className="w-[229px] h-[92px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
                The most flexible & compliant payroll system for organizations
                and freelancers. Hire globally from anywhere
              </h1>
            </div>
            <div className="border-t-[2px] border-Rectangle rounded-[10px] shadow-md pt-[40px] pl-[20px] ">
              <img src={gipperfi_1} alt="" className="w-[50px] h-[50px] " />
              <h1 className="w-[135px] h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
                Gipperfi
              </h1>
              <h1 className="w-[229px] h-[69px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
                Open a new way to earn interest on your business savings. Get up
                to 10% APY on your savings
              </h1>
            </div>
            <div className="border-t-[2px] border-Rectangle rounded-[10px] shadow-md pt-[40px] pl-[20px] ">
              <img src={cart} alt="" className="w-[50px] h-[50px] " />
              <h1 className="w-[157px] h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
                E-commerce store
              </h1>
              <h1 className="w-[229px] h-[92px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
                Create a free e-commerce website and start selling globally with
                no coding knowledge only a few clicks
              </h1>
            </div>
            <div className="border-t-[2px] border-Rectangle rounded-[10px] shadow-md pt-[40px] pl-[20px] ">
              <img src={bankPayouts} alt="" className="w-[50px] h-[50px] " />
              <h1 className="w-[152px] h-[27px] font-Jost not-italic font-big text-sm leading-[27px] items-center justify-center text-secondary-main mt-[20px] ">
                Accept payments
              </h1>
              <h1 className="w-[229px] h-[69px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[20px] ">
                Easily receive payment from anyone, anywhere in the world using
                our tailored tools
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/**For individuals */}

      <div className="w-[905px] h-[500px] ml-[267px] flex flex-row items-center justify-between   ">
        <div className="w-[486.27px] h-[500px] lg:relative">
          <img src={bookmark} alt="" className=" lg:absolute z-10 " />
          <img
            src={forindivualspic}
            alt=""
            className=" lg:absolute lg:top-[73px] lg:left-[40px]  "
          />
        </div>
        <div className="w-[363px] h-[458px] mt-[21px] mb-[21px] ">
          <h1 className="w-[118px] h-[27px] font-Jost not-italic font-regular text-sm leading-[27px] text-center items-center text-secondary-30 ">
            For Individuals
          </h1>
          <h1 className="w-[76px] h-[40px] font-Jost not-italic font-big text-l leading-[40px] text-center items-center text-secondary-main mt-[40px] ">
            GU$T
          </h1>
          <h1 className="w-[338px] h-[92px] font-Jost not-italic font-regular text-s leading-[23px]  text-secondary-30 mt-[10px] ">
            Spend crypto and money like a social bird using gipperpay native
            token, individuals can send crypto or fiat to anyone using just
            their social media username
          </h1>
          <div className="w-[363px] h-[119px] flex flex-row items-center mt-[40px] ">
            <div className="w-[5px] h-[95px] bg-primary-main rounded-[10px] mr-[20px] "></div>
            <div className="w-[338px] h-[119px] items-start ">
              <h1 className="w-[94px] h-[40px] font-Jost not-italic font-big text-l leading-[40px] text-center items-center text-primary-main ">
                Invoice
              </h1>
              <h1 className="w-[338px] h-[69px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-30 mt-[10px]  ">
                Freelancers can generate professional invoices and get paid by
                their contractors with no stress from anywhere.
              </h1>
            </div>
          </div>
          <div className="w-[156px] h-[50px] border-[1px] border-primary-main rounded-[5px] pt-[10px] pb-[10px] pl-[25px]  mt-[40px] flex flex-row items-center">
            <h1 className="w-[77px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-center items-center text-primary-main mr-[10px] ">
              Get Started
            </h1>
            <img src={rightarrow} alt="" className="w-[24px] h-[24px] " />
          </div>
        </div>
      </div>

      {/**For Businesses */}

      <h1 className="w-[118px] h-[27px] mt-[221px] ml-[208px] font-Jost not-italic font-regular text-sm leading-[27px] text-center items-center text-secondary-30 ">
        For Businesses
      </h1>
      <div className="w-[960px] h-[407px] ml-[248px] mt-[48px] flex flex-row justify-between ">
        <div className="w-[529px] h-[407px]">
          <div className="flex flex-row items-start ">
            <div className="w-[5px] h-[95px] rounded-[10px] bg-primary-main mr-[20px] "></div>
            <div className="w-[504] h-[172px] flex flex-col items-start ">
              <div className="w-[120px] h-[40px] flex flex-row  ">
                <img src={apipic2} alt="" className="w-[40px] h-[40px] " />
                <h1 className="w-[60px] h-[40px] font-Jost font-big text-l leading-[40px] text-secondary-main ml-[20px] ">
                  APIs
                </h1>
              </div>
              <h1 className="w-[504px] h-[120px] font-Jost not-italic font-medium text-l leading-[40px] items-center text-secondary-main mt-[12px] ">
                Grow with our robust API integration for processing
                cryptocurrency payments and building financial products
              </h1>
            </div>
          </div>
          <div className="w-[512px] h-[145px] mt-[20px] ">
            <div className="w-[512px] h-[46px] mt-[10px] flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[5px] h-[5px] mr-[10px] "
              />
              <h1 className="w-[497px] h-[46px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-main ">
                Let the customer pay in any crypto of their choice, while you
                receive in any crypto of your choice
              </h1>
            </div>
            <div className="w-[509px] h-[23px] mt-[10px] flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[5px] h-[5px] mr-[10px] "
              />
              <h1 className="w-[494px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-main ">
                Accept stablecoin payment and get settled in your local currency
              </h1>
            </div>
            <div className="w-[476px] h-[23px] mt-[10px] flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[5px] h-[5px] mr-[10px] "
              />
              <h1 className="w-[461px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-main ">
                Works in a custodial and non-custodial way
              </h1>
            </div>
            <div className="w-[438px] h-[23px] mt-[10px] flex flex-row items-center ">
              <img
                src={ellipse}
                alt=""
                className="w-[5px] h-[5px] mr-[10px] "
              />
              <h1 className="w-[423px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] items-center text-secondary-main ">
                View all transaction and customers data
              </h1>
            </div>
          </div>
          <div className="w-[180px] h-[50px] border-[1px] border-primary-main rounded-[5px] pt-[10px] pb-[10px] pl-[25px]  mt-[40px] flex flex-row items-center">
            <h1 className="w-[101px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-center items-center text-primary-main mr-[10px] ">
              View API Docs
            </h1>
            <img src={rightarrow} alt="" className="w-[24px] h-[24px] " />
          </div>
        </div>
        <img src={apipic3} alt="" className="w-[395px] h-[353px] " />
      </div>

      {/**Usecases */}

      <h1 className="w-[83px] h-[27px] font-Jost not-italic font-regular text-sm  leading-[27px] items-center text-center ml-[100px] mt-[370px] ">
        Use Cases
      </h1>
      <h1 className="w-[346px] h-[40px] font-Jost not-italic font-big text-l  leading-[40px] items-center ml-[100px]  mt-[20px] ">
        Who can use Gipperpay?
      </h1>
      <div className="w-[1071px] h-[426px]  pt-[60px] pb-[60px]  pr-[45px] ml-[100px] ">
        <div className="w-[981px] h-[305px] grid grid-20px-css gap-[53px] ">
          <div className="w-[256px] h-[75px] flex flex-row items-center ">
            <img src={mark} alt="" className="w-[40px] h-[40px] mr-[10px] " />
            <div className="w-[206px] h-[75px] flex flex-col items-start ">
              <h1 className="w-[103px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                Freelancers
              </h1>
              <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                Consequat et quis posuere consectetur nulla bibendum eu.
              </h1>
            </div>
          </div>
          <div className="w-[256px] h-[75px] flex flex-row items-center ">
            <img src={mark} alt="" className="w-[40px] h-[40px] mr-[10px] " />
            <div className="w-[206px] h-[75px] flex flex-col items-start ">
              <h1 className="w-[108px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                Professional
              </h1>
              <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                Consequat et quis posuere consectetur nulla bibendum eu.
              </h1>
            </div>
          </div>
          <div className="w-[256px] h-[75px] flex flex-row items-center ">
            <img src={mark} alt="" className="w-[40px] h-[40px] mr-[10px] " />
            <div className="w-[206px] h-[75px] flex flex-col items-start ">
              <h1 className="w-[127px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                Web3 start up
              </h1>
              <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                Consequat et quis posuere consectetur nulla bibendum eu.
              </h1>
            </div>
          </div>
          <div className="w-[256px] h-[75px] flex flex-row items-center ">
            <img src={mark} alt="" className="w-[40px] h-[40px] mr-[10px] " />
            <div className="w-[206px] h-[75px] flex flex-col items-start ">
              <h1 className="w-[101px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                Developers
              </h1>
              <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                Consequat et quis posuere consectetur nulla bibendum eu.
              </h1>
            </div>
          </div>
          <div className="w-[256px] h-[75px] flex flex-row items-center ">
            <img src={mark} alt="" className="w-[40px] h-[40px] mr-[10px] " />
            <div className="w-[206px] h-[75px] flex flex-col items-start ">
              <h1 className="w-[107px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                E-commerce
              </h1>
              <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                Consequat et quis posuere consectetur nulla bibendum eu.
              </h1>
            </div>
          </div>
          <div className="w-[256px] h-[75px] flex flex-row items-center ">
            <img src={mark} alt="" className="w-[40px] h-[40px] mr-[10px] " />
            <div className="w-[206px] h-[75px] flex flex-col items-start ">
              <h1 className="w-[155px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                Crypto enthusiast
              </h1>
              <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                Consequat et quis posuere consectetur nulla bibendum eu.
              </h1>
            </div>
          </div>
          <div className="w-[256px] h-[75px] flex flex-row items-center ">
            <img src={mark} alt="" className="w-[40px] h-[40px] mr-[10px] " />
            <div className="w-[206px] h-[75px] flex flex-col items-start ">
              <h1 className="w-[131px] h-[27px] font-Jost font-big text-sm leading-[27px] text-center text-Rectangle ">
                Crypto newbie
              </h1>
              <h1 className="w-[206px] h-[38px] mt-[10px] font-Jost not-italic font-regular text-xs leading-[19px]  text-secondary-main ">
                Consequat et quis posuere consectetur nulla bibendum eu.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/**Pricing */}

      <div className="w-[1004px] h-[365px] m-auto mt-[80px] ">
        <div className="w-[346px] h-[197px] m-auto  ">
          <h1 className="w-[57px] h-[27px] font-Jost not-italic font-regular text-sm leading-[27px] text-secondary-30 m-auto items-center text-center ">
            Pricing
          </h1>
          <h1 className="w-[346px] h-[80px] font-Jost not-italic font-big text-l leading-[40px] text-secondary-main items-center text-center ">
            Get the best offers to scale your crypto journey
          </h1>
          <div className="w-[157px] h-[50px] border-[1px] border-secondary-main rounded-[100px] pt-[10px] pb-[10px] pl-[25px]  mt-[20px] m-auto flex flex-row items-center">
            <h1 className="w-[78px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-center items-center text-secondary-main mr-[10px] ">
              See Pricing
            </h1>
            <img src={rightarrow2} alt="" className="w-[24px] h-[24px] " />
          </div>
        </div>
        <div className="w-[1004px] h-[128px] mt-[40px]  grid grid-16px-css gap-[52px] ">
          <div className="rounded-[20px] bg-secondary-light flex flex-row p-[30px] items-center ">
            <img
              src={gipperpaylogo}
              alt=""
              className="w-[45px] h-[50px] mr-[40px] "
            />
            <h1 className="w-[154px] h-[66px] font-Jost not-italic  font-big text-m  leading-[33px]  items-center text-secondary-main ">
              Native token payout
            </h1>
          </div>
          <div className="rounded-[20px] bg-primary-light flex flex-row p-[30px] items-center ">
            <img
              src={gipperfiActive}
              alt=""
              className="w-[45px] h-[50px] mr-[40px] object-scale-down "
            />
            <h1 className="w-[129px] h-[66px] font-Jost not-italic  font-big text-m  leading-[33px]  items-center text-secondary-main ">
              GipperFi payout
            </h1>
          </div>
          <div className="rounded-[20px] bg-[#D3F1F8] flex flex-row p-[30px] items-center ">
            <img
              src={bankPayouts2}
              alt=""
              className="w-[45px] h-[50px] mr-[40px] "
            />
            <h1 className="w-[97px] h-[66px] font-Jost not-italic  font-big text-m  leading-[33px]  items-center text-secondary-main ">
              Bank payout
            </h1>
          </div>
        </div>
      </div>

      {/**Sign UP */}
      <div className="w-[1030px] h-[222px] bg-primary-light mt-[80px] m-auto rounded-[50px] flex flex-row items-center pl-[73px] ">
        <h1 className="w-[346px] h-[59px] font-Jost not-italic font-big  text-l leading-[40px] text-secondary-main  ">
          Sign up for Free Boost your Crypto Journey
        </h1>
        <div className="w-[443px] h-[50px] ml-[95px] pl-[20px] rounded-[100px] bg-white-60 flex flex-row items-center justify-between ">
          <div className="flex flex-row items-center ">
            <img src={mail} alt="" className="w-[20px] h-[20px] " />
            <input
              type="email"
              placeholder="gipperpay@email.com"
              className=" font-Jost not-italic font-regular text-s leading-[23px] text-white-30 ml-[10px] "
            />
          </div>
          <div className="w-[143px] h-[50px] bg-primary-main rounded-[100px] pl-[45px] pt-[13.5px] ">
            <h1 className="w-[53px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-white-60 text-center ">
              Sign up
            </h1>
          </div>
        </div>
      </div>

      {/**Blog Post */}

      <div className="w-[1240px] h-[642px] mt-[80px] m-auto  rounded-[20px] shadow-m flex flex-row pl-[40px] pr-[40px] items-center justify-between ">
        <div className="w-[346px] h-[197px] ">
          <h1 className="w-[37px] h-[27px] font-Jost  not-italic font-regular text-sm leading-[27px] text-secondary-30 ">
            Blog
          </h1>
          <h1 className="w-[346px] h-[80px] font-Jost  not-italic font-big text-l leading-[40px] text-secondary-main mt-[20px] mb-[20px] ">
            Whats happening in Gipperpay?
          </h1>
          <div className="w-[188px] h-[50px] border-[1px] border-secondary-main rounded-[100px] pt-[10px] pb-[10px] pl-[25px]   flex flex-row items-center">
            <h1 className="w-[109px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-center items-center text-secondary-main mr-[10px] ">
              Read Blog posts
            </h1>
            <img src={rightarrow2} alt="" className="w-[24px] h-[24px] " />
          </div>
        </div>
        <div className="w-[714px] h-[562px] grid grid-14px-css gap-[0]">
          <div className="p-[20px] ">
            <img src={frame31} alt="" className="w-[315px] h-[248px] " />
            <h1 className="w-[317px] h-[99px] mt-[20px] font-Jost font-medium text-m leading-[33px] text-secondary-main ">
              Gipper pay offers crypto solutions to boost the african economy
            </h1>
            <h1 className="w-[313px] h-[92px] mt-[20px] font-Jost font-regular text-s leading-[23px] text-white-30 ">
              Consequat et quis posuere consectetur nulla bibendum eu. Ac etiam
              ullamcorper amet non tellus semper. Leo tempus elementum viverra
              praesent.
            </h1>
            <div className="w-[92px] h-[23px] mt-[20px] flex flex-row items-center ">
              <h1 className="w-[77px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-primary-main  ">
                Learn More
              </h1>
              <img
                src={rightarrow}
                alt=""
                className="w-[15px] h-[15px] -rotate-45 "
              />
            </div>
          </div>
          <div className="p-[20px] ">
            <img src={frame31} alt="" className="w-[315px] h-[248px] " />
            <h1 className="w-[317px] h-[99px] mt-[20px] font-Jost font-medium text-m leading-[33px] text-secondary-main ">
              Gipper pay offers crypto solutions to boost the african economy
            </h1>
            <h1 className="w-[313px] h-[92px] mt-[20px] font-Jost font-regular text-s leading-[23px] text-white-30 ">
              Consequat et quis posuere consectetur nulla bibendum eu. Ac etiam
              ullamcorper amet non tellus semper. Leo tempus elementum viverra
              praesent.
            </h1>
            <div className="w-[92px] h-[23px] mt-[20px] flex flex-row items-center ">
              <h1 className="w-[77px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-primary-main  ">
                Learn More
              </h1>
              <img
                src={rightarrow}
                alt=""
                className="w-[15px] h-[15px] -rotate-45 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
