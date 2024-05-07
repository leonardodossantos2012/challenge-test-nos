module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  reporters: [
    'default',
    ["jest-html-reporters", {
      "publicPath": "./report",
      "filename": "result.html",
      "openReport": false
    }]

  ],
};
