import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

//https://playwright.dev/docs/api/class-keyboard//

test('Keyboard Actions', async ({ page })=> {
  await page.goto("https://www.google.com/")
  await page.locator("textarea[name='q']").focus()
  await page.keyboard.type("Playwright keyboard actions")
  await page.keyboard.press("ArrowLeft")
  await page.keyboard.down("Shift")
    for(let i=0; i<'7'; i++)
        await page.keyboard.press("ArrowLeft")      
  await page.keyboard.up("Shift")
  await page.keyboard.press("Backspace")
  await page.keyboard.press("Enter")
  await page.waitForTimeout(2000)  
  //await page.keyboard.press('Ctrl+F5'); //Refresh the page
  //await page.click("textarea[name='q']").type('Playwright keyboard actions')
  //await page.keyboard.press('Esc')
  //await page.keyboard.press('Enter')

  page.close()
    
});