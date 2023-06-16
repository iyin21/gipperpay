/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
    },
    boxShadow: {
      sm: "rgba(0, 0, 0, 0.1)",
      md: "10px 8px 10px rgba(0, 0, 0, 0.05)",
      m: "15px 15px 20px rgba(0, 0, 0, 0.05)",
      s: "5px 10px 10px rgba(0, 0, 0, 0.05)",
    },
    fontSize: {
      xxs: "11px",
      xs: "13px",
      s: "16px",
      sm: "19px",
      m: "23px",
      l: "28px",
      xl: "33px",
      "2xl": "40px",
      "3xl": "48px",
      "4xl": "64px",
    },
    fontWeight: {
      big: "700",
      regular: "400",
      medium: "500",
      bold: "800",
    },
    screens: {
      xs: {"max": "511px"},
      sm: "512px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage:{
        'hero': "url('/src/assets/companyHero.png')",
      },
      colors: {
        white: {
          Main: "#F9F9F9",
          10: "#CDCDCD",
          20: "#A4A4A4",
          30: "#7B7B7B",
          40: "#525252",
          50: "#313131",
          60: "#FCFCFC",
          70: "#F7F7F7",
          80: "#D9E1F2",
          90: "#FFFFFF"
        },
        secondary: {
          light: "#CECCD4",
          dark: "#020008",
          main: "#0B002A",
          10: "#AEAAB8",
          20: "#857F94",
          30: "#5C5571",
          40: "#342B4E",
          50: "#090023",
          60: "#07001C",
          70: "#060015",
          80: "#04000E",
        },
        Rectangle: "#FA3C12",
        Rectangle15: "#D3F1F8",
        whiteText: "#FCFCFC",
        primaryLight:"#FED8D0",
        primary: {
          light: "#FED8D0",
          dark: "#320C04",
          main: "#FA3C12",
          10: "#FDBEB0",
          20: "#FC9D88",
          30: "#FC7D61",
          40: "#FB5D3A",
          50: "#D0320F",
          60: "#A7280C",
          70: "#7D1E09",
          80: "#531406",
          90: "#858095",
          mainGreen: "#21BF73",
          red:"#F11B1B",
          green:"#31C36C",
          yellow:"#F2C94C",
          darkGray:"#2A2728",
          lightRed:"#FCE0E2",
          lightGreen:"#D8F9FB",
          lightYellow:"#FCF1CF"
        },
        lightBlue:"#D9E1F2",
        lightGreen:"#EEF7D4",
        lightWhite:"#7B7B7B"

      },
      margin: {
        25: "25%",
      }
    },
  },
  plugins: [],
};
