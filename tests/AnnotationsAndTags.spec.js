import {test} from "@playwright/test"

test.skip("Test one", async ({page})=> {

})

test('not yet ready', async ({ page }) => {
    test.fail();
});

test.fixme('test to be fixed', async ({ page }) => {
});

test('slow test', async ({ page }) => {
    test.slow();
});



test("Test full report @smoke", async ({ page }) => {
    // ...
});