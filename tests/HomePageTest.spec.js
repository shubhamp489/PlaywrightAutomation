const {test , expect}  = require('@playwright/test');


test('Home Page',async({page})=>{

    await page.goto('https://demoblaze.com/index.html');
   
    const pageTitle = await page.title();   //to capture title of the webpage
    console.log('Page title is :' , pageTitle);    //to print title
   
    await expect(page).toHaveTitle('STORE');   //to validate page title
    await expect(page).toHaveURL('https://demoblaze.com/index.html');    //to validate page url
   
    const pageUrl = page.url();
    console.log('Page url is : ',pageUrl);
    


    //to close page
    //await page.close();

})