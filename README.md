# QA_Homework_Automation_Reiz-Tech

## 🚀 How to Run the Automation Script

### 1. Clone the Repository
If you haven’t already, clone this project to your local machine:
```sh
git clone https://github.com/your-username/QA_Homework_Automation_Reiz-Tech.git
cd QA_Homework_Automation_Reiz-Tech
```

### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed.  
Then, install all required dependencies:
```sh
npm install
```

### 3. Install Playwright Browsers
Playwright needs to download browser binaries (Chromium, Firefox, WebKit):
```sh
npx playwright install
```

### 4. Configure Your Test User
- Manually register a test user at [https://buggy.justtestit.org/](https://buggy.justtestit.org/) before running the script.
  - For testing purposes, I've configured a registered account in the test.
    - ```Username: wodahs | Password: Android12345!```
- Update the username and password in your test files if needed.

### 5. Run All Tests
To execute all test scripts:
```sh
npx playwright test
```

### 6. Run a Specific Test File
To run only the profile update test:
```sh
npx playwright test profile.spec.ts
```

### 7. View Test Results
After running tests, you can view a detailed HTML report:
```sh
npx playwright show-report
```

---

**Tips:**
- Run tests in a specific browser:
  ```sh
  npx playwright test --project=firefox
  npx playwright test --project=webkit
  ```
- For debugging, run in headed mode:
  ```sh
  npx playwright test --headed
  ```