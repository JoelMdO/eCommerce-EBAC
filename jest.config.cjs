module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
};
