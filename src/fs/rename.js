import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorMessage = 'FS operation failed';

const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const properFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.access(wrongFilePath);
    try {
      await fs.access(properFilePath);
    } catch {}
    await fs.rename(wrongFilePath, properFilePath);
  } catch {
    throw new Error(errorMessage);
  }
};

await rename();
