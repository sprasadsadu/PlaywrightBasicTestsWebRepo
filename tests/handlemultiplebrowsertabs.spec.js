import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test('Handle Multiple Browser Tabs', async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage();
    
    await page.goto("https://freelance-learn-automation.vercel.app/login") 

  const [newPage] = await Promise.all
  (
    [
    context.waitForEvent('page'), // Wait for the new tab to open
    page.locator("//div[@class='container-child']//a[4]").click() // Click on the link that opens a new tab
    
    ]
)

  await newPage.waitForLoadState(); // Wait for the new tab to finish loading

  //proceed with login or required actions on the new tab//    
  await newPage.waitForTimeout(2000)
  newPage.close()
})