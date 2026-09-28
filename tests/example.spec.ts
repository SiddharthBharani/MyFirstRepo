import { test, expect } from '@playwright/test';

test('InterviewQuestion', async ({page}) =>{
  await page.goto('https://example.com/');
  await expect(page).toHaveTitle('Example Domain');
  const title = await page.title();
  console.log('title: ', title)
  const heading = await page.getByRole('heading', {level:1}).textContent();
  console.log('heading: ', heading)
  console.log(expect(title).toEqual(heading));
  page.on('dialog', dialog => dialog.accept());

})

test('Check Vowel', ({page}) =>{
const hasVowel = (text:string): boolean =>{
  return /[aeiou]/i.test(text);
}
console.log(hasVowel('air'));
})

