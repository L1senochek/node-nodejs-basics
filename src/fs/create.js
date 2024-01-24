import fs from 'fs/promises';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const content = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const create = async () => {
  // Write your code here
  console.log(__dirname, filePath, 1111);

  try {
    console.log(2);
    await fs.writeFile(filePath, content, { flag: 'wx' });
  } catch {
    console.log(3);
    throw new Error(errorMessage);
  }
};

await create();
