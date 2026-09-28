import {test} from "@playwright/test";
test.describe.configure({mode:'serial'});
test.beforeEach(async ({page}) =>{
     console.log("Before anything else runs")
// await page.goto('http://localhost:4200/pages/iot-dashboard');
})

test.describe('suite 1', ()=>{
    
test.beforeEach(async ({page}) =>{
    console.log("Inside Suite 1 Test1")
// await page.getByText('Forms').click();
})

test('@Tag1 first test', async({page}) =>{
    
    
    // await page.getByText('Form Layots').click()
})

test('second test', async({page}) =>{
    
    // await page.getByText('Form Layouts').click();
    // await page.waitForTimeout(3000);
    // const gridEmailInput = page.locator('nb-card', { hasText: 'Using the Grid' }).getByRole('textbox', { name: 'Email' });
    // await gridEmailInput.fill("test@test.com");
})

})

// test.describe('suite 2', ()=>{

// test('@Tag1 4th test', async({page}) =>{
//     await page.getByText('Forms').click();
//     await page.getByText('Form Layouts').click()
//     await page.waitForTimeout(3000);
// })

// test('5th test', async({page}) =>{
//     await page.getByText('Forms').click();
//     await page.getByText('Form Layouts').click()
//     await page.waitForTimeout(3000);
// })

// test('6th test', async({page}) =>{
//     await page.getByText('Forms').click();
//     await page.getByText('Form Layouts').click()
//     await page.waitForTimeout(3000);
// })
// })

test('Locator Syntax Rules', ({page}) =>{
    //find by tag
   page.locator('input')

   //find by id
   page.locator('#inputEmail1');

   //find by class
   page.locator('.shape-rectangle');

   //find by attribute
   page.locator('[placeholder="Email"]');

    //find by full class name
   page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');

   //find by XPath
   page.locator('//*[@id="inputEmail1"]')

   //find by partial text match
   page.locator(':text("Using the")')

   page.locator(':text-is("Using the Grid")');

})