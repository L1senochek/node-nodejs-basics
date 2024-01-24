import url from 'url';
import path from 'path';
import fs from 'fs/promises';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const initialFolderPath = path.join(__dirname, 'files');
const copyFolderPath = path.join(__dirname, 'files_copy');

const errorMessage = 'FS operation failed';

const copy = async () => {
  await fs.mkdir(copyFolderPath);
  const files = await fs.readdir(initialFolderPath);
  console.log(files);

  for (const file of files) {
    const initialFilePath = path.join(initialFolderPath, file);
    const copyFilePath = path.join(copyFolderPath, file);

    const stats = await fs.stat(initialFilePath);

    if (stats.isDirectory()) {
      await copy(initialFilePath, copyFilePath);
    } else {
      await fs.copyFile(initialFilePath, copyFilePath);
    }
  }
};

await copy();
