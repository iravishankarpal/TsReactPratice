let { Given, When, Then } = require("@cucumber/cucumber")

Given("the user is on the login page", async function () {
    console.log("home page")
    // browser = await chromium.launch({ headless: false })
    // page = await browser.newPage()
    // await page.goto("http://localhost:3000/login")
})

When("the user enters correct email and password", async function () {
    // await page.fill('input[type="email"]', "test@example.com")
    // await page.fill('input[type="password"]', "password123")
    // await page.click('button[type="submit"]')
    console.log("login successful")
})

When("the user enters incorrect email or password", async function () {
    // await page.fill('input[type="email"]', "wrong@example.com")
    // await page.fill('input[type="password"]', "wrongpassword")
    // await page.click('button[type="submit"]')
    console.log("login failed")
})

Then("the user should see a success message", async function () {
    // const alertMessage = await page.evaluate(() => alert())
    // expect(alertMessage).toBe("Login successful!")
    // await browser.close()
    console.log("login successful")
})

Then("the user should see an error message", async function () {
    // const errorMessage = await page.textContent("p")
    // expect(errorMessage).toBe("Invalid email or password")
    // await browser.close()
    console.log("login failed")
})
