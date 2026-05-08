import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  // Locators
  private usernameField = 'input#username';
  private passwordField = 'input#password';
  private submitButton = 'button#submit';
  private loginUrl = 'https://practicetestautomation.com/practice-test-login/';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the login page
   */
  async goto(): Promise<void> {
    await this.page.goto(this.loginUrl);
  }

  /**
   * Fill the username field
   * @param username - The username to enter
   */
  async fillUsername(username: string): Promise<void> {
    await this.page.fill(this.usernameField, username);
  }

  /**
   * Fill the password field
   * @param password - The password to enter
   */
  async fillPassword(password: string): Promise<void> {
    await this.page.fill(this.passwordField, password);
  }

  /**
   * Click the Submit button
   */
  async clickSubmit(): Promise<void> {
    await this.page.click(this.submitButton);
  }

  /**
   * Perform login action with credentials
   * @param username - The username
   * @param password - The password
   */
  async login(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickSubmit();
  }
}
