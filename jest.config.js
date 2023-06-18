module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx'],
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
      '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  };
  