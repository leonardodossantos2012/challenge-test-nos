# Test Automation Challenge NOS with Jest

This project is a demonstration of test automation using Jest to validate an API service.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Tests in GitHub Actions](#running-tests-in-github-actions)
- [Why Jest with TypeScript?](#why-jest-with-typescript)
  - [1. Strong Typing with TypeScript](#1-strong-typing-with-typescript)
  - [2. Modern Testing Framework with Jest](#2-modern-testing-framework-with-jest)
  - [3. Seamless Integration with TypeScript](#3-seamless-integration-with-typescript)
  - [4. Enhanced Developer Experience](#4-enhanced-developer-experience)
  - [5. Community Support and Documentation](#5-community-support-and-documentation)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [Deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js & npm - [Installation Guide](https://nodejs.org/)

### Installation

Follow these steps to install and set up the project:

1. Clone the repository:

    ```bash
    git clone git@github.com:leonardodossantos2012/challenge-test-nos.git
    ```

2. Navigate to the project directory:

    ```bash
    cd challenge-test-nos
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

#### Running Tests Locally


To run tests locally, you need to set the `API_URL` environment variable to specify the base URL of the API. Execute the following command in your terminal:

```bash
export API_URL=https://gorest.co.in/public/v2
```


- Run tests:

    ```bash
    npx jest
    ```

## Running Tests in GitHub Actions

This project uses GitHub Actions to automatically run tests whenever there's a push to the main branch. Here's how it's set up:

1. When a new commit is pushed to the main branch, GitHub Actions triggers a workflow defined in the `.github/workflows/test.yml` file.

2. The workflow specifies the steps to:
   - Set up the environment.
   - Install dependencies.
   - Run the tests using Jest.
   - Save test reports as artifacts (optional).

You can view the workflow and test results in the GitHub Actions tab of your repository.

## Why Jest with TypeScript?

When it comes to test automation, choosing the right tools can significantly impact the efficiency and effectiveness of your testing efforts. In this project, we have opted to use Jest with TypeScript for several reasons:

### 1. Strong Typing with TypeScript

TypeScript provides static typing, allowing us to catch errors at compile-time rather than at runtime. This helps in writing more robust and maintainable code, reducing the likelihood of bugs and improving code quality.

### 2. Modern Testing Framework with Jest

Jest is a popular and feature-rich testing framework built by Facebook. It comes with built-in support for features like test runners, assertions, mocks, and spies. Jest's intuitive API and powerful features make it an excellent choice for test automation.

### 3. Seamless Integration with TypeScript

Jest has excellent support for TypeScript out of the box. It seamlessly integrates with TypeScript projects, allowing us to write tests using TypeScript syntax without any additional configuration.

### 4. Enhanced Developer Experience

The combination of Jest and TypeScript offers an enhanced developer experience. With TypeScript's type-checking capabilities and Jest's comprehensive testing features, developers can write tests with confidence, refactor code with ease, and maintain a high level of test coverage.

### 5. Community Support and Documentation

Both Jest and TypeScript have vibrant communities with extensive documentation, tutorials, and resources available online. This ensures that developers have access to a wealth of knowledge and support when using these tools for test automation.

By leveraging the strengths of Jest and TypeScript, we aim to create a robust and maintainable test suite that ensures the reliability and quality of our application.
