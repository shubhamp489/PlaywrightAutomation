const {test,expect} =require('@playwright/test')

test('soft assertions',async ({page})=>{
await page.goto("https://demoblaze.com/index.html");

//Hard Assertions
 await expect(page).toHaveTitle('STORE')
 await expect(page).toHaveURL("https://demoblaze.com/index.html")
 await expect(page.locator('a.navbar-brand')).toBeVisible()

//Soft Assertions
await expect.soft(page).toHaveTitle('STORE123')
 await expect.soft(page).toHaveURL("https://demoblaze.com/index.htmlLLLLL")
 await expect.soft(page.locator('a.navbar-brand')).toBeVisible()


})