# Playwright Test Project

This project contains end-to-end tests using [Playwright](https://playwright.dev).

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository (if applicable)
2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run a specific test file

```bash
npx playwright test tests/hello-world.spec.ts
```

### Run tests in UI mode

```bash
npx playwright test --ui
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

### View HTML Report

```bash
npx playwright show-report
```

## Project Structure

- `tests/`: Contains test files (e.g., `hello-world.spec.ts`)
- `playwright.config.ts`: Playwright configuration
- `package.json`: Project dependencies and scripts
