const {test,expect} = require('@playwright/test');

test('Title of the test -Home Page',async({page})=>{

 await page.goto('https://demoblaze.com/')

//javascript is a asynchornised script language that why we specify async and await ,suppose we have written 10 steps , but in asynchronsu prog langauge it will not run step by steps , so if we put wait it will run step by steps 
 const pageTitle=await page.title();
 console.log('Page title is ==',pageTitle);

await expect(page).toHaveTitle('STORE')
await page.close();
})
