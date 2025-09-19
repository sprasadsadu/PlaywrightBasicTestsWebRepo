import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test("Handle Alert Popups - JS Alert", async ({page}) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
await page.locator("//button[text()='Click for JS Alert']").click()
await page.waitForTimeout(1000)
const resultMsg = await page.locator("//p[@id='result']").textContent() 
console.log(resultMsg)
await expect(page.locator("//p[@id='result']")).toHaveText("You successfully clicked an alert")
//via If condition//
if (resultMsg === "You successfully clicked an alert"){
    console.log("Alert handled successfully")
}
await page.close()
});


test("Handle Alert Popups - JS Confirm", async ({page}) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts")    

page.on('dialog', async (dg) => {
    expect(dg.message()).toContain('I am a JS Confirm');
    await dg.accept()
});

await page.locator("//button[text()='Click for JS Confirm']").click()
const jsConfirm = await page.locator("//p[@id='result']").textContent() 
console.log(jsConfirm)
//await expect(page.locator("//p[@id='result']")).toContainText("Cancel")
//await expect(page.locator("//p[@id='result']")).toContainText("Ok")
//via If condition//
if (jsConfirm == "%Cancel%"){
    console.log("Alert was Cancelled")
}
else {
        console.log("Alert was Confirmed")
     }

await page.waitForTimeout(1000)
await page.close()

});

test("Handle Prompt - JS Message", async ({page}) => {
await page.goto("https://the-internet.herokuapp.com/javascript_alerts")    

page.on('dialog', async (prompt) => {
    expect(prompt.type()).toContain('prompt')
    expect(prompt.message()).toContain('I am a JS prompt')
    await prompt.accept("Playwright is my new toy")
})

await page.locator("//button[text()='Click for JS Prompt']").click()
await page.waitForTimeout(1000)
const jsPrompt = await page.locator("//p[@id='result']").textContent()
//via If condition//
if (jsPrompt === "Playwright is my new toy"){
    console.log("Alert handled successfully")
}
else {
        console.log("Nothing entered in the prompt alert" )
     }

await page.close()

}); 