import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";
import defaultTheme from "tailwindcss/defaultTheme";
//import defaultColors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx,scss}",
  ],
  
  safelist: ["active"],
  theme: {
    fontFamily: {
      header: ["Raleway", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    colors: {
      //...defaultColors,
      transparent: "transparent",
      primary: "#5540af",
      "primary-light": "#d0cce3",
      secondary: "#252426",
      white: "#ffffff",
      black: "#000000",
      yellow: "#f9e71c",
      lila: "#e6e5ec",
      "grey-10": "#6c6b6d",
      "grey-20": "#7c7c7c",
      "grey-30": "#919091",
      "grey-40": "#929293",
      "grey-50": "#f4f3f8",
      "grey-60": "#edebf6",
      "grey-70": "#d8d8d8",
      "hero-gradient-from": "rgba(85, 64, 174, 0.95)",
      "hero-gradient-to": "rgba(65, 47, 144, 0.93)",
      "blog-gradient-from": "#8f9098",
      "blog-gradient-to": "#222222",
    },

    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      backgroundImage: {
        striped: 'linear-gradient(45deg, #d0cce3 25%, #b9b5c9 25%, #b9b5c9 50%, #d0cce3 50%, #d0cce3 75%, #b9b5c9 75%, #b9b5c9 100%)',
      },
      animation: {
        "move-stripe": "move-stripe 10s linear infinite",
      },
      keyframes: {
        "move-stripe": {
          "0%": { "background-position-x": "0%" },
          "100%": { "background-position-x": "100%" },
        },
      },
      backgroundSize: {
        "2828": "28.28px 28.28px"
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        42: "10.5rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
        204: "51rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
      },
      inset: {
        "2/5": "40%",
      },
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
};
export default config;
