module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/test/**/*.test.ts'],
  collectCoverage: true,
  coverageReporters: ['text', 'html', 'lcov'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
