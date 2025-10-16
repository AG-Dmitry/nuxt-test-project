// eslint.config.mjs
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  features: {},
  plugins: {
    'security-node': securityNode,
    'anti-trojan-source': antiTrojanSource,
  },
  extends: [
    'plugin:security-node/recommended',
    'plugin:anti-trojan-source/recommended',
  ],
});
