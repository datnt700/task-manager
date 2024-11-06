import { test, expect } from "@playwright/test";

test.describe("Modal Component", () => {
  test("should add new board", async ({ page }) => {
    await page.goto("http://localhost:5173");
    const buttons = await page.locator("button");
    const buttonTexts = await buttons.allInnerTexts();

    const index = buttonTexts.findIndex(
      (text) => text.trim() === "Add new board",
    );
    if (index !== -1) {
      const buttonToClick = buttons.nth(index);
      await expect(buttonToClick).toBeVisible({ timeout: 10000 });
      await buttonToClick.click();
    } else {
      console.log("Button 'Add new board' not found.");
    }

    const input = await page.getByPlaceholder("e.g: Default Board");
    await input.fill("Hello");

    await page.getByRole("button", { name: "Create board" }).click();

    await page.waitForSelector(".modalBackground:not(.active)"); // Hoặc tương tự để xác nhận modal đã được đóng

    const result = await page.locator("text=Hello");
    await expect(result).toBeVisible();
  });
});
