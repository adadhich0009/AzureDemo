import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { LoggedInPage } from './pages/LoggedInPage';

test('Practice Test Login - Successful Login Flow', async ({ page }) => {
  // Initialize page objects
  const loginPage = new LoginPage(page);
  const loggedInPage = new LoggedInPage(page);

  // Step 1: Navigate to login page
  await loginPage.goto();

  // Step 2 & 3: Enter credentials and Step 4: Submit
  await loginPage.login('student', 'Password123');

  // Wait for page load
  await loggedInPage.waitForPageLoad();

  // Step 5: Verify new page URL contains the success URL
  await loggedInPage.verifyUrlContainsSuccess();

  // Step 6: Verify page contains expected success text
  await loggedInPage.verifySuccessMessage();

  // Step 7: Verify Log out button is displayed
  await loggedInPage.verifyLogoutButtonVisible();

  console.log('✓ Login test passed successfully');
  console.log(`✓ Current URL: ${loggedInPage.getUrl()}`);
});
