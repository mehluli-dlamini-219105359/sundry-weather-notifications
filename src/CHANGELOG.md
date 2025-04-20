# Changelog

issue found [Imports BUG](https://github.com/mehluli-dlamini-219105359/sundry-weather-notifications/issues/18)

## [v1.1.0] - 2025-04-20

### 🆕 Added
- Introduced unit tests for all creational design patterns:
  - `SimpleFactory`
  - `FactoryMethod`
  - `AbstractFactory`
  - `Builder`
  - `Prototype`
  - `Singleton`
- Created `/tests` directory with the following structure:


- Example test cases added for:
- Object creation and attribute validation
- Edge case handling (e.g., missing builder inputs, singleton uniqueness)

### 🛠️ Changed
- **`User.ts`** class was moved out of `UserFactory.ts` to resolve circular import issues and eliminate `"Cannot find module './User'"` error.
- Updated `jest.config.js` to correct multiple export conflict and apply `ts-jest` transform for `.ts`/`.tsx` files:
```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },
};

