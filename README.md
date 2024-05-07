# Test Automation Challenge NOS with Jest

This project is a demonstration of test automation using Jest to validate an API service.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Running Tests in GitHub Actions](#running-tests-in-github-actions)
- [Contributing](#contributing)
- [License](#license)

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