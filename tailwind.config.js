/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins-Reg"],
        poppinsMed: ["Poppins-Med"],
        firaCode: ["FiraCode-Reg"],
        firaCodeBold: ["FiraCode-Bold"],
        dancingScript: ["Dancing-Script"],
        notoSans_Bold: ["Noto-Sans Bold"],
      },
    },
  },
  plugins: [],
};
