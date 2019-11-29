module.exports = {
  "plugins": [
    "remark-preset-lint-recommended",
    "remark-preset-lint-consistent",
    "remark-preset-lint-markdown-style-guide",
    ["remark-lint-maximum-line-length", false],
    ["remark-lint-ordered-list-marker-value", false],
    // As the below rules isn't very compatible
    // with remark auto fixing, it's disabled
    ["remark-lint-list-item-indent", false],
    ["remark-lint-list-item-bullet-indent", false],
  ]
};