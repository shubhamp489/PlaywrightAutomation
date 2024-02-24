const{test,expect} = require ('@playwright/test')
const { By } = require('selenium-webdriver')

test("AssertionsTest",async({page})=>{
    //open app url
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    await page.locator('')
    const  logoElement=await page.locator("//img[@alt='nopCommerce demo store']")
    await expect(logoElement).toBeVisible()

     const options=await page.locator('[name="DateOfBirthMonth"] option')
    await expect (options).toHaveCount(13)
    console.log(options)

})

/*
Assertions
-----------
Playwright includes test assertions in the form of expect function.
Reference: https://playwright.dev/docs/test-assertions
1) expect(page).toHaveURL()   Page has URL
2) expect(page).toHaveTitle()   Page has title
3) expect(locator).toBeVisible()  Element is visible
4) expect(locator).toBeEnabled()  Control is enabled
5) expect(locator).toBeChecked()  Radio/Checkbox is checked
6) expect(locator).toHaveAttribute() Element has attribute
7) expect(locator).toHaveText()  Element matches text- here we have to pass full text value 
8) expect(locator).toContainText()  Element contains text- here we need to pass partiall text 
9) expect(locator).toHaveValue(value) Input has a value
10) expect(locator).toHaveCount()  List of elements has given length
*/