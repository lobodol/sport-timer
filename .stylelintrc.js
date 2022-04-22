module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-hudochenkov/full',
  ],
  rules: {
    'string-quotes': 'single',
    indentation: [2],
    'at-rule-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
  },
}
