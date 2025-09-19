import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test("Select value from dropdown", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")
    await page.getByRole("button",{name:"Sign in"}).click()
    await page.locator("//span[text()='Manage']").hover()
    await page.waitForTimeout(1000)
    await page.locator("//span[text()='Manage']").click()
    await page.close()
})