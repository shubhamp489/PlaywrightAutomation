const {test,expect}=require('@playwright/test');

test('Input Box test',async ({page})=>{
await page.goto("");
//inputbox
await page.locator("").fill(""); 
})