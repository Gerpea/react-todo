module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/public/', '/cypress/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
}
