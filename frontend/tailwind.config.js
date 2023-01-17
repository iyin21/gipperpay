module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: {
          50: "#313131",
          40: "#525252",
          30: "#7B7B7B",
          20: "#A4A4A4",
          10: "#CDCDCD",
          white: "#F9F9F9",
        },
        secondary: {
          light: "#CECCD4",
          dark: "#020008",
          10: "#AEAAB8",
          20: "#857F94",
          30: "#5C5571",
          40: "#342B4E",
          50: "#090023",
          60: "#07001C",
          70: "#060015",
          80: "#04000E",
          main: "#0B002A",
          rectangle:"#FA3C12"
        },
        primary: {
          light: "#FED8D0",
          dark: "#320C04",
          10: "#FDBEB0",
          20: "#FC9D88",
          30: "#FC7D61",
          40: "#FB5D3A",
          50: "#D0320F",
          60: "#A7280C",
          70: "#7D1E09",
          80: "#531406",
          main: "#FA3C12",
          transparent:"#0B002A"
        },

      },
      fontFamily:{
        jost: ['Jost', 'sans-serif']
      },
      fontSize:{
        xxs:"11px",
        xs:"13px",
        s:"16px",
        sm:"19px",
        m:"23px",
        l:"28px",
        xl:"33px",
        xxl:"40px",
        xxxl:"48px"
      },
      fontWeight:{
        regular:"400",
        medium:"500",
        bold:"800",
      }
    },
  },
  plugins: [],
};
