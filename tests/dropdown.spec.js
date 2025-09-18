const {test, expect} = require('@playwright/test');

test("Select value from dropdown", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("#state").selectOption("Maharashtra")
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({label:"Madhya Pradesh"})  //label is the best option to use for selecting value from dropdown//
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({value:"Gujarat"})
    await page.waitForTimeout(1000)
    await page.locator("#state").selectOption({index:8})
    await page.waitForTimeout(1000)
    const state = await page.locator("#state").textContent()    
    await expect(state.includes("Telangana")).toBeTruthy()
    
    if (state == "Kerala") {
        console.log("Test is passed")
        } 
        else {      
        console.log("Test is failed")
        }
    
    //using for loop and checking all the values in dropdown//

    let allOptions = await page.$("#state")
    let allStates = await allOptions.$$("option")
    let stateStatus = false;

    for(let i=0; i<allStates.length; i++){
        let stateName = await allStates[i].textContent()
        console.log(stateName)
        if(stateName == "Andaman and Nicobar Islands"){            
            console.log("Andaman and Nicobar Islands is found in the list")
            stateStatus = true
            break;
        }
    }
    
await expect(stateStatus).toBeTruthy()

await page.locator("#hobbies").selectOption(["Reading","Swimming"])
await page.waitForTimeout(2000)
await page.close()

})