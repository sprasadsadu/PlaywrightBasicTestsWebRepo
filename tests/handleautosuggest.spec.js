import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test("Handle Auto Suggestion", async ({ page }) => {
  await page.goto("https://www.google.com/")
  await page.locator("textarea[name='q']").focus()
  await page.keyboard.type("Playwright")
  await page.waitForSelector("ul[role='listbox'] li")  
  await page.locator("textarea[name='q']").focus()
  await page.keyboard.press("ArrowDown")
  await page.keyboard.press("ArrowDown")
  await page.waitForTimeout(2000)
  await page.keyboard.press("Enter")
  await page.waitForTimeout(3000)
  page.close()
});

test.only("Handle Auto Suggestion Using Loop", async ({ page }) => {
  await page.goto("https://www.google.com/")
  await page.locator("textarea[name='q']").focus()
  await page.keyboard.type("Playwright")
  await page.waitForSelector("//li[@role='presentation']")
  const elements = await page.$$("//li[@role='presentation']")
  for(let i=0; i<elements; i++)
  {
    const text = await elements[i].textContent()
    if(text.includes('api testing')) 
        press.keyboard("Enter")
        await page.waitForTimeout(1000)        
  }
  await page.keyboard.press("Enter")
  await page.waitForTimeout(5000)
  page.close()
});