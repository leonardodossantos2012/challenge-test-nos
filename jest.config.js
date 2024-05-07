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
      "publicPath": "./reports",
      "filename": "result.html",
      "openReport": false
    }]

  ],
};
