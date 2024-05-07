module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  reporters: [
    "default",
    ['jest-html-reporter', {
      pageTitle: 'Test Report',
      outputPath: './reports/result.html'
    }]
  ]
};
