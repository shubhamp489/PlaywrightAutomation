const {test, expect, selectors } = require("@playwright/test")

//import {test,export} from '@playwright/test'

test('Locator',async({page})=>{

await page.goto('https://demoblaze.com/index.html')

//click on login button - property of element as locator 

//await page.click('#login2')
//await page.locator('#login2').click()
await page.locator('id=login2').click()

//provide user name - property 
await page.locator('#loginusername').fill('shubhamp')
//await page.fill('#loginusername','shubhamp')
//await page.type('#loginusername','shubhamp')


//provide password -css
await page.locator('#loginpassword').fill('Lovgh5655@1234')




//clcik om login buttton - xpath
await page.click("//button[text()='Log in']");

//verify logout link presence -xpath
const logoutlink=await page.locator("//a[text()='Log out']")
await expect(logoutlink).toBeVisible();


await page.close()

})

