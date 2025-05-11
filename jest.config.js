/ ** @type {import('jest').Config} * /
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests', '<rootDir>/__tests__'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};