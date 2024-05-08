# Test Automation Challenge NOS with Jest

## Summary

- [Test Case Objectives](#test-case-objectives)
  - [1. JsonSchema Validation](#1-jsonschema-validation)
  - [2. Validate if All Results Have the Attribute "status" Equals "completed"](#2-validate-if-all-results-have-the-attribute-status-equals-completed)
  - [3. Validate All Values of the Attribute "due_on"](#3-validate-all-values-of-the-attribute-due_on)
- [Performance Test](#performance-test)
  - [Motive for Performance Test](#motive-for-performance-test)
  - [Justification for Using K6](#justification-for-using-k6)
- [DevOps CI/CD](#devops-cicd)
  - [Motive for DevOps CI/CD](#motive-for-devops-cicd)
  - [Implementation of Continuous Testing](#implementation-of-continuous-testing)
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



## Test Case Objectives

In this project, we have implemented three test cases to validate the functionality of the API service:

### 1. JsonSchema Validation

**Objective:** The objective of this test case is to ensure that the response from the API service adheres to the specified JSON schema. By validating the response schema, we verify that the structure of the data returned by the API meets the expected format.

### 2. Validate if All Results Have the Attribute "status" Equals "completed"

**Objective:** This test case aims to verify that all results returned by the API service have the attribute "status" set to "completed". By enforcing this condition, we ensure that only completed tasks are included in the response, maintaining data consistency and accuracy.

### 3. Validate All Values of the Attribute "due_on"

**Objective:** The objective of this test case is to validate all values of the attribute "due_on" in the response. By checking the format and validity of "due_on" values, we ensure that the dates are correctly formatted and comply with any specified requirements or constraints.

These test cases collectively cover various aspects of the API service's functionality, including data structure, attribute values, and overall data integrity.

## Performance Test

Performance testing is crucial for evaluating the responsiveness, stability, and scalability of an API under various load conditions.

### Motive for Performance Test

1. **Evaluate Scalability:** Performance testing helps assess how well the API scales under increasing loads. By simulating a large number of concurrent users making requests to the API, we can determine whether it can handle the expected volume of traffic without experiencing degradation in performance.

2. **Ensure Responsiveness:** Performance testing allows us to measure response times and throughput under different load conditions. We aim to ensure that the API responds promptly to user requests, maintaining acceptable latency levels even during peak usage periods.

3. **Detect Performance Issues:** Performance testing helps uncover potential performance issues such as slow response times, high latency, or resource exhaustion. By identifying and addressing these issues early on, we can prevent them from impacting user experience and system reliability.

4. **Optimize Resource Utilization:** Understanding resource utilization patterns during load testing enables us to optimize resource allocation and infrastructure provisioning. By efficiently utilizing resources, we can minimize costs and improve the overall efficiency of the API.

### Justification for Using K6

1. **Open Source and Easy to Use:** K6 is an open-source load testing tool known for its simplicity and ease of use. It provides a user-friendly scripting syntax, making it straightforward to create and execute performance tests for the API.

2. **Scalability and Flexibility:** K6 supports distributed load testing, allowing us to simulate thousands of concurrent users and complex scenarios. Its flexible architecture enables us to scale our tests as needed, making it suitable for evaluating the scalability of the API.

3. **Realistic Load Scenarios:** With K6, we can create realistic load scenarios that mimic real-world usage patterns. By simulating various user behaviors and interactions with the API, we can assess its performance under diverse conditions and identify potential performance bottlenecks.

4. **Rich Metrics and Reporting:** K6 provides detailed metrics and insightful reports, allowing us to analyze performance data effectively. It offers comprehensive visualization tools and integration options with monitoring platforms, enabling us to gain valuable insights into the performance of the API and make informed optimization decisions.

By conducting performance testing with K6 for the API "https://gorest.co.in/public/v2/todos", we aim to ensure that the API can handle the expected load, maintain acceptable performance levels, and deliver a responsive and reliable user experience.


## DevOps CI/CD

Continuous Integration and Continuous Deployment (CI/CD) practices play a crucial role in automating the software development lifecycle and ensuring rapid, reliable, and efficient delivery of software changes.

### Motive for DevOps CI/CD

1. **Fast Feedback:** CI/CD enables fast feedback by automating the process of integrating and testing code changes as soon as they are committed to the version control system. This ensures that issues are detected early in the development cycle, allowing for timely resolution and preventing the accumulation of technical debt.

2. **Daily Metrics Integration with Prometheus and Grafana:** Implementing CI/CD pipelines allows for the collection of daily metrics related to build and deployment processes. By integrating with monitoring tools like Prometheus and Grafana, teams can gain insights into the health and performance of their CI/CD pipelines, identify bottlenecks, and make data-driven improvements to optimize the delivery pipeline.

3. **Safety in Regression Testing:** CI/CD facilitates automated regression testing by running a suite of tests on each code change before it is deployed to production. This ensures that new changes do not introduce regressions or break existing functionality. By automating regression testing, teams can maintain the stability and reliability of their software systems while accelerating the pace of development.

### Implementation of Continuous Testing

Continuous Testing is a key aspect of CI/CD pipelines and involves the following principles and objectives:

1. **Fast Feedback:** Continuous Testing aims to provide rapid feedback on the quality of code changes by automating the execution of tests throughout the development process. This includes unit tests, integration tests, and end-to-end tests, which are executed automatically as part of the CI/CD pipeline.

2. **Daily Metrics Integration with Prometheus and Grafana:** Continuous Testing metrics, such as test coverage, test execution times, and test failure rates, are collected and visualized using monitoring tools like Prometheus and Grafana. This allows teams to track the performance of their tests over time, identify trends, and proactively address issues to improve test efficiency and effectiveness.

3. **Safe in Regression Testing:** Continuous Testing ensures the safety of code changes by running comprehensive regression tests on each build. This helps detect and prevent regressions from being introduced into the codebase, ensuring that new changes do not negatively impact existing functionality. Automated regression testing also provides confidence in the stability and reliability of the software system.


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
