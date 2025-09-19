import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
const testdata = JSON.parse(JSON.stringify(require("../usercredentials.json")))
const testusers = JSON.parse(JSON.stringify(require("../testusers.json")))

test("Read Data From Json", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup")
  await page.locator("//input[@name='name']").fill(testdata.name)
  await page.locator("//input[@id='email']").fill(testdata.email)
  await page.locator("//input[@id='password']").fill(testdata.password)
  await page.locator("//label[normalize-space()='Selenium']").check()
  await page.locator("//label[normalize-space()='AWS']").check()  
  await page.waitForTimeout(2000)
  await page.close();

});

test.describe("Data Driven Logins", function()
{
    for (const data of testusers) 
      {
        test.describe(`Login tests with user ${data.id}`, function()
        {
          test(`Login To Application`, async ({ page }) => {
            await page.goto("https://freelance-learn-automation.vercel.app/login")  
            await page.locator("//input[@id='email1']").fill(data.email)
            await page.locator("//input[@id='password1']").fill(data.password)
            await page.waitForTimeout(2000)
            await page.close();
          });
        });
      }
});