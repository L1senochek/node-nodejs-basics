import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errorMessage = 'FS operation failed';

const folderPath = path.join(__dirname, 'files');

const list = async () => {
  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath);

    console.log('array of filenames:');
    files.forEach((filename, index) =>
      console.log(`${index + 1}) ${filename}`)
    );
  } catch {
    throw new Error(errorMessage);
  }
};

await list();
