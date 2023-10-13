const {test,expect}= require('@playwright/test');

test('LocateMultipleElements',async({page})=>{

    await page.goto('https://demoblaze.com/index.html')

    
    /* //to print multiple elements
    const links = await page.$$('a');
    for(const link of links){

        const linktext =  await link.textContent();
        console.log(linktext);


    }
*/
    //locate all the produs displayed on home page

    page.waitForSelector("//div[@id='tbodyid']//div//h4//a")
    const prods =await page.$$("//div[@id='tbodyid']//div//h4//a")
    for(const prod of prods){
       
        const prodName =await prod.textContent();
        console.log(prodName)
    }



})