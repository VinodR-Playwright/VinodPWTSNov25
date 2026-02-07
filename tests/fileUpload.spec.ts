import {test , expect} from '@playwright/test'
import path from 'path'

test('To Handle Single File upload' , async ({page}) =>{

  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  const filepath1 = path.join(__dirname,'../TestData/Courses.txt')
  console.log(filepath1)

  await page.locator("#filesToUpload").setInputFiles(filepath1);

  await expect(page.locator("#fileList li")).toHaveText("Courses.txt");

})