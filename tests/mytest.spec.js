import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/');
  
  await page.getByRole('link', { name: 'Web form' }).click();
  await page.getByLabel('Text input').click();
  await page.getByLabel('Text input').fill('shubham');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Lovgh5655@1234');
  await page.getByLabel('Textarea').click();
  await page.getByLabel('Textarea').fill('ydvxajhsvjhasvjhavxvjsavxasjxaxhahjxjx');
  await page.getByLabel('Default checkbox').check();
  await page.getByLabel('Default radio').check();
  await page.getByPlaceholder('Type to search...').click();
  await page.getByPlaceholder('Type to search...').fill('New York');
  await page.getByLabel('Dropdown (select)\n              \n                Open this select menu\n                One\n                Two\n                Three').selectOption('1');
  await page.getByLabel('Color picker').click();
  await page.getByLabel('Color picker').fill('#412867');
  await page.getByRole('heading', { name: 'Web form' }).click();
  await page.getByLabel('Date picker').click();
  await page.getByRole('cell', { name: '18' }).click();
  await page.getByLabel('Example range').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});




// npx playwright codegen --device "iPhone 14 Pro"