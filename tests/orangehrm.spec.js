const {test, expect} = require('@playwright/test');

test.use({headless:false, slowMo:100})

test("validate OrangeHRM login", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")    
    await expect(page).toHaveTitle("OrangeHRM")
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()
    await page.getByAltText("profile picture").first().click()
    await page.screenshot({path:"screenshot/orangehrm.png", fullPage:true})
    await page.getByText("Logout").click()

})

