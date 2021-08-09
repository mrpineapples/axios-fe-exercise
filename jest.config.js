module.exports = {
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  
    moduleNameMapper: {
      components: '<rootDir>/src/components',
      '\\.svg': '<rootDir>/test/fileMock.ts',
    },
  }