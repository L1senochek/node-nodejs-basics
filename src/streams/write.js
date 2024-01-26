import url from 'url';
import path from 'path';
import fs from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const writeStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writeStream);
  process.stdin.on('error', (error) => console.error(error.message));
};

await write();
