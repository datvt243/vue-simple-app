module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-simple-app/" : "/",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Vuejs - Simple App",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};
