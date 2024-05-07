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
    git clone https://github.com/your-username/test-automation-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd test-automation-project
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Usage

Examples and instructions for using the project:

- Run tests:

    ```bash
    npm test
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

## Contributing

We welcome contributions from the community! If you'd like to contribute to this project, please follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
