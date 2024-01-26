import url from 'url';
import path from 'path';
import fs from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

  readStream.on('data', (chunk) => process.stdout.write(chunk));
  readStream.on('error', (error) => console.error(error.message));
};

await read();
