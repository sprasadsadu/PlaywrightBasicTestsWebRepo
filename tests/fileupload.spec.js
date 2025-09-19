import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test("File upload test", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/upload")
    //const filePath = "C:/Users/Screenshot.png" //provide the absolute path of the file//
    await page.locator("#file-upload").setInputFiles("./tests-examples/upload/Screenshot2.png") //for multiple files use array of file path - setInputFiles(['file1.png','file2.jpeg'])//
    await page.locator("#file-submit").click()
    await page.waitForTimeout(2000)//just to see the file is uploaded or not//
    await expect(page.locator("//h3")).toHaveText("File Uploaded!")
    await page.close()    
})