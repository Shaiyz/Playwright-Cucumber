**Playwright BDD Test Automation with Multi-Instance Support**
This repository provides a comprehensive setup for automated testing using Playwright and Behavior-Driven Development (BDD) principles. The project is designed to run tests efficiently across multiple instances by leveraging environment variables, enabling parallelization and environment-specific configurations.

**Key Features:**
Playwright Integration: Seamless setup for end-to-end testing of web applications.
Behavior-Driven Development (BDD): Uses Cucumber for human-readable test scenarios.
Multi-Instance Execution: Run tests on multiple instances with configurable environment variables.
Environment-Specific Configurations: Easily switch between environments (e.g., dev, staging, prod) using .env files.
Parallel Test Execution: Speed up test runs with Playwright's built-in parallelization support.
CI/CD Ready: Pre-configured for integration with popular CI/CD tools like GitHub Actions, GitLab CI, or Jenkins.

**Prerequisites**
Node.js (v16 or later)
Playwright installed globally (npm i playwright)

**Running Tests**
1. npm run test:qa
2. npm run test:dev

**Running Single Test**
  npm run test:single

**License**
This project is licensed under the MIT License.

