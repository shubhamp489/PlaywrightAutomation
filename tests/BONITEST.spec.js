import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://bonigarcia.dev/selenium-webdriver-java/index.html');
  await page.getByRole('link', { name: 'Web form' }).click();
  await page.getByLabel('Text input').click();
  await page.getByLabel('Text input').fill('Shubham');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Pandey');
  await page.getByLabel('Textarea').click();
  await page.getByLabel('Textarea').fill('A quick fox jumps on the lazy dog');
  await page.getByLabel('Dropdown (select)\n              \n                Open this select menu\n                One\n                Two\n                Three').selectOption('2');
  await page.getByPlaceholder('Type to search...').click();
  await page.getByPlaceholder('Type to search...').fill('Seattle');
  //await page.getByLabel('File input').click();
  await page.getByLabel('Default checkbox').check();
  await page.getByLabel('Default radio').check();
  await page.getByLabel('Color picker').click();
  await page.getByLabel('Color picker').fill('#54239f');
  await page.locator('div').filter({ hasText: 'Web form' }).nth(2).click();
  await page.getByLabel('Date picker').click();
  await page.getByRole('cell', { name: '29' }).nth(1).click();
  await page.getByRole('cell', { name: '29' }).nth(1).click();
  await page.getByRole('heading', { name: 'Web form' }).click();
  
  await page.getByLabel('Example range').click();
  await page.getByText('Color picker Date picker Example range').click();

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('heading', { name: 'Form submitted' }).click();
  const Title = await page.title();
  console.log(Title)
});