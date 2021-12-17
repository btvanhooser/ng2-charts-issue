import type { Config } from '@jest/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
const config: Config.InitialOptions = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  collectCoverage: true,
  coverageDirectory: '.coverage',
  coverageReporters: ['text-summary', 'html'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  reporters: ['default'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash'
  }
};
export default config;
