import {test, expect} from "@playwright/test";

test.beforeEach(async ({page}) =>{
    // await page.goto('http://localhost:4200/pages/iot-dashboard');
})

test.describe('Form Layout Page', () =>{
    // test.beforeEach(async ({page})=>{
    //     await page.getByText('Forms').click();
    //     await page.getByText('Form Layouts').click()
    // })

    // test('input fields', async({page}) =>{
    //     const gridEmailInput = page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:"Email"});
    //     await gridEmailInput.fill('test@test.com');
    //     // await gridEmailInput.clear();
    //     // await gridEmailInput.pressSequentially('test@test.com', {delay: 500})
    //     await expect(gridEmailInput).toHaveValue('test@test.com');
    // })

    // test('radio button', async({page})=>{
    //     const gridRadioButton = page.locator('nb-card', {hasText:"Using the Grid"});
    //     await gridRadioButton.getByRole('radio', {name:"Option 1"}).check({force:true});
    //     expect(await gridRadioButton.getByRole('radio', {name:"Option 1"}).isChecked()).toBeTruthy()
    // })
})

test('Checkboxes', async({page})=>{
    // await page.getByText('Modal & Overlays').click();
    // await page.getByText('Toastr').click();
    // await page.getByRole('checkbox', {name: 'Hide on click'}).uncheck({force:true})
    // await page.getByRole('checkbox', {name: 'Prevent arising of duplicate toast'}).check({force:true})

    // const allBoxes = page.getByRole('checkbox');
    // for(const box of await allBoxes.all()){
    //     await box.check({force:true});
    //     expect(await box.isChecked()).toBeTruthy();

    //     await box.uncheck({force:true});
    //     expect(await box.isChecked()).toBeFalsy();

    // }
})