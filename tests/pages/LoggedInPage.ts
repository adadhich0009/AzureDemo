import { Page, expect } from '@playwright/test';

export class LoggedInPage {
  private page: Page;

  // Locators
  private logoutButton = 'a:has-text("Log out")';
  private successUrl = 'practicetestautomation.com/logged-in-successfully/';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Verify that the URL contains the success URL
   */
  async verifyUrlContainsSuccess(): Promise<void> {
    expect(this.page.url()).toContain(this.successUrl);
  }

  /**
   * Verify that the page contains success text
   */
  async verifySuccessMessage(): Promise<void> {
    const pageContent = await this.page.content();
    const hasSuccessText =
      pageContent.includes('Congratulations') ||
      pageContent.includes('successfully logged in');
    expect(hasSuccessText).toBeTruthy();
  }

  /**
   * Verify that the logout button is visible
   */
  async verifyLogoutButtonVisible(): Promise<void> {
    const logoutBtn = this.page.locator(this.logoutButton);
    await expect(logoutBtn).toBeVisible();
  }

  /**
   * Get the current page URL
   */
  getUrl(): string {
    return this.page.url();
  }

  /**
   * Wait for the page to load completely
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
