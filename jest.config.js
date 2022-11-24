/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-html-reporters', {
      'publicPath': './html-report',
      'filename': 'report.html',
      'openReport': true
    }]
  ]
};
