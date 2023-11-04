const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for your JavaScript code
  output: {
    filename: "main.js", // Output bundle filename
    path: path.resolve(__dirname, "public/js"), // Output directory
  },
  // Add more Webpack configurations as needed
};
