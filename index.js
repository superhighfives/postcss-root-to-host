module.exports = function () {
  return {
    postcssPlugin: "postcss-root-to-host",

    Root(root) {
      root.walk((node) => {
        if (node.selector) {
          node.selector = node.selectors
            .map((selector) => {
              if (/:root/g.test(selector)) {
                return selector.replace(/:root/g, ":host");
              }
              return selector;
            })
            .join(", ");
        }
      });
    },
  };
};

module.exports.postcss = true;
