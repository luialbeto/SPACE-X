import eslintConfigNext from '@next/eslint-plugin-next';

/** @type */
const config = [
  {
    ignores: ['next-env.d.ts'],
  },
  ...eslintConfigNext.configs.recommended,
];

export default config;