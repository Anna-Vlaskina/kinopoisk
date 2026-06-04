export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  rules: {
    "media-feature-range-notation": "prefix",
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "local"],
      },
    ],
  },
};
