const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/tests/**/*.test.{ts,tsx,js,jsx}'],
  testEnvironment: 'jsdom',
};

function createConfig() {
  const config = createJestConfig(customJestConfig);
  config.setupFilesAfterEnv = ['<rootDir>/node_modules/@testing-library/jest-dom'];
  return config;
}

module.exports = createConfig();