module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['<rootDir>/setup/setupEnv.js'], // Arquivo para setup do ambiente de testes
    collectCoverageFrom: [
      '<rootDir>/src/controllers/*.js',
      '<rootDir>/src/services/*.js',
      '<rootDir>/src/routes/*.js'
    ]
  };