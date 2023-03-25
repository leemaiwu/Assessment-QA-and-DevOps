
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
    await driver.sleep(1000)
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('"Choose 2!" title displays after clicking "Draw" button', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click()
    await driver.sleep(1000)
    const chooseTitle = await driver.findElement(By.id('choose-header'))
    const isDisplayed = await chooseTitle.isDisplayed()
    expect(isDisplayed).toBe(true)
})

test('"Your Duo" title displays after clicking "Add to Duo" button under a robot', async () => {
    await driver.findElement(By.xpath('//button[text()="Draw"]')).click()
    await driver.findElement(By.xpath('//button[text()="Add to Duo"]')).click()
    await driver.sleep(1000)
    const yourDuoTitle = await driver.findElement(By.id('your-duo-header'))
    const isDisplayed = await yourDuoTitle.isDisplayed()
    expect(isDisplayed).toBe(true)
})
