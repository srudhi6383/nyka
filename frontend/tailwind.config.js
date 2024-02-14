const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "app-blue": "#013CC6",
        "dark-blue": '#1C2A53'
      }
    },
  },
  plugins: [],
});

