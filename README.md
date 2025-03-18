# Workflow CA

## Project Setup

### Install Dependencies
To install the necessary dependencies, run:
```bash
npm install
```

### Running Tests
To run the tests, use:
```bash
npm run test
```

### Environment Variables
The following environment variables are required for the project:
- `LOGIN_EMAIL`: The email used for login.
- `LOGIN_PASSWORD`: The password used for login.

Make sure to set these variables in your environment or in a `.env` file at the root of the project.

## Project Structure
- `index.html`: The home page of the project.
- `venue/index.html`: The venue details page.
- `js/`: Contains JavaScript files for various functionalities.
- `css/`: Contains CSS files for styling.
- `tests/`: Contains test files for the project.

## Scripts
- `npm install`: Installs the project dependencies.
- `npm run test`: Runs the test suite using Playwright.

## Usage
1. Start the local server.
2. Navigate to `http://127.0.0.1:5500/` to view the home page.
3. The venue list will load automatically.
4. Click on a venue to view its details.

For any issues or contributions, please open a pull request or issue on the repository.
