import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorMessage = 'FS operation failed';

const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    await fs.access(fileToReadPath);
    const content = await fs.readFile(fileToReadPath, 'utf-8');

    console.log('content of the fileToRead.txt:');
    console.log(content);
  } catch {
    throw new Error(errorMessage);
  }
};

await read();
