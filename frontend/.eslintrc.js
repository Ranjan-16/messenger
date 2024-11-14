module.exports = {
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@components", "./src/components"],
          ["@pages", "./src/pages"],
          ["@api", "./src/api"],
          ["@hooks", "./src/hooks"],
          ["@schemas", "./src/schemas"],
          ["@utils", "./src/utils"],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
