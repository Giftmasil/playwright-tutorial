import test,{page, expect} from "@playwright/test"

test("Assertions demo", async ({page}) => {
    await page.goto("https://kitchen.applitools.com")
    await page.pause()
    //CHECK ELEMENT PRESENT OR NOT
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1) //does not return true or false
    if (await page.$('text=The Kitchen')) {// returns true or false
        await page.locator("text=The Kitchen").click()
    }

    //check element hidden or viscible
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    

    //check element enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    //check text
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText("The Kitchen")
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText("The Kitchen")

     //check attribute value
     await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute("class", /.*css-dpmy2a/)
     await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)


     //check page url and title
     await expect(page).toHaveURL("https://kitchen.applitools.com")
     await expect(page).toHaveTitle("The Kitchen")
     await page.pause()

     //visual validation with screenshot
     await expect(page).toHaveScreenshot()
     await page.pause()
})