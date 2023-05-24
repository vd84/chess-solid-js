import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
const { resolve } = require('path');


export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});

module.exports.jest = {
  configure: {
    moduleNameMapper: {
      // Optional: Add any module name mappings if needed
      // For example, to handle CSS module imports
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(@babel/preset-react|@babel/preset-typescript)/)',
    ],
    setupFilesAfterEnv: [resolve(__dirname, './jest.setup.js')],
    // Add any additional Jest configuration if needed
  },
};
