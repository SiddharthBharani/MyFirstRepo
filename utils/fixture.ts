import {test as base} from "@playwright/test";

type myFixture = {
fixture1: string,
fixture2: string
}
export const customTest = base.extend<myFixture>({
fixture1: async({}, use) =>{
   const s1 = "Before anything else runs";
    await use(s1);
    console.log("\nfixture1 executed")

},

fixture2: async({page, fixture1}, use) =>{
   const s1 = "Before anything else runs";
    await use(s1);
    console.log("\nfixture1 executed")
    await page.goto('https://example.com/');
    console.log(fixture1+"\nfixture1 executed")
}
})