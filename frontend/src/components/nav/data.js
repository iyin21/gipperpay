import {
  gustCoin1,
  payrollpic,
  donation,
  gipperfi_1,
  checkout,
  walletpic,
  cart,
} from "../../assets/index";

import { mark } from "../../icons";

export const PRODUCTS = [
  {
    name: "Payroll",
    image: payrollpic,
    link: "/products/payroll",
  },
  {
    name: "Gipperfi",
    image: gipperfi_1,
    link: "/products/gipperfi",
  },
  {
    name: "Checkout",
    image: checkout,
    link: "/products/checkout",
  },
  {
    name: "Donation Link",
    image: donation,
    link: "/products/donation",
  },
  {
    name: "GU$T",
    image: gustCoin1,
    link: "/products/GUST",
  },
];

export const BUSINESSES = [
  {
    name: "Business wallet",
    image: walletpic,
    link: "/businesses/businessWallet",
  },
  {
    name: "E-commerce store",
    image: cart,
    link: "/businesses/ecommerceStore",
  },
];

export const COMPANY = [
  {
    name: "About Gipperpay",
    icon: mark,
    link: "#/",
  },
  {
    name: "Contact Us",
    icon: mark,
    link: "#/",
  },
  {
    name: "Blog",
    icon: mark,
    link: "#/",
  },
];
