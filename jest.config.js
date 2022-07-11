module.exports = {
  moduleDirectories: ["<rootDir>", "node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jest-environment-jsdom",
};
