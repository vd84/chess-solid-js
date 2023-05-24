module.exports = {
	// ... other Jest config options
	moduleNameMapper: {
	  // Handle CSS modules with the identity-obj-proxy mock
	  "\\.(css|less|scss|sass)$": "identity-obj-proxy",
	  "^.+\\.svg$": "jest-svg-transformer",
	  // Add other mappings if needed
	  // ...
	},
	"testEnvironment": "jsdom",
	"preset": "solid-jest/preset/browser"
};
  
  