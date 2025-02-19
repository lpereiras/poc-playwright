import { test, expect } from '@playwright/test';

test.beforeEach('', async ({ page }) => {
  await page.goto('')
})

test('validate aplication title and access login-link', async ({ page }) => {
  await expect(page.getByText('Bem-vindo ao Projeto de Automação')).toBeVisible()

  await page.getByRole('link', {name: 'login-link'}).click()

  await expect(page).toHaveURL('' + 'login.html')

  await expect(page.getByTestId('username')).toBeVisible()
    await page.getByTestId('username').fill('poc-playwright@estudo.com.br')

  await expect(page.getByTestId('password')).toBeVisible()
    await page.getByTestId('password').fill('635241789')  

  await page.getByRole('button', { name: 'Login' }).click()

  await expect(page).toHaveURL('' + 'cadastro-simples.html')
});

