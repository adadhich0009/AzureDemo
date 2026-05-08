import { test, expect } from '@playwright/test';

test('Practice Test Login - Successful Login Flow', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Step 2: Type username into Username field
  await page.fill('input#username', 'student');

  // Step 3: Type password into Password field
  await page.fill('input#password', 'Password123');

  // Step 4: Click Submit button
  await page.click('button#submit');

  // Wait for navigation to complete
  await page.waitForLoadState('networkidle');

  // Step 5: Verify new page URL contains the success URL
  expect(page.url()).toContain('practicetestautomation.com/logged-in-successfully/');

  // Step 6: Verify page contains expected success text
  const pageContent = await page.content();
  const hasSuccessText = 
    pageContent.includes('Congratulations') || 
    pageContent.includes('successfully logged in');
  expect(hasSuccessText).toBeTruthy();

  // Step 7: Verify Log out button is displayed
  const logoutButton = page.locator('a:has-text("Log out")');
  await expect(logoutButton).toBeVisible();

  console.log('✓ Login test passed successfully');
  console.log(`✓ Current URL: ${page.url()}`);
});
