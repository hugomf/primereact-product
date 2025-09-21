const webpack = require('webpack');

module.exports = function override(config, env) {
  // Update sass-loader to use the new JavaScript API
  // Find the sass rule and update its configuration
  const sassRuleIndex = config.module.rules.findIndex(rule =>
    rule.oneOf && rule.oneOf.some(oneOfRule =>
      oneOfRule.use && oneOfRule.use.some(use =>
        use.loader && use.loader.includes('sass-loader')
      )
    )
  );

  if (sassRuleIndex !== -1) {
    // Update the sass-loader configuration to avoid legacy API
    config.module.rules[sassRuleIndex].oneOf.forEach(oneOfRule => {
      if (oneOfRule.use) {
        oneOfRule.use.forEach(use => {
          if (use.loader && use.loader.includes('sass-loader')) {
            // Configure sass-loader with the new API options
            if (!use.options) {
              use.options = {};
            }
            // Set the implementation to use Dart Sass (which is the default in newer versions)
            use.options.implementation = require('sass');
          }
        });
      }
    });
  }

  return config;
};