import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test("Handle iFrames", async ({ page }) => {
  await page.goto("https://docs.oracle.com/javase/8/docs/api/")  
  const iframe = await page.frameLocator("//frame[@name='packageListFrame']")
  await iframe.locator("//a[text()='java.applet']").click()
  await page.waitForTimeout(2000)
  page.close()
})