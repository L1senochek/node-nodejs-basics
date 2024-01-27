import crypto from 'crypto';
import url from 'url';
import path from 'path';
import fs from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  const stream = fs.createReadStream(filePath);

  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => hash.update(chunk));

    stream.on('end', () => {
      const fileHash = hash.digest('hex');
      console.log(fileHash);
      resolve(fileHash);
    });

    stream.on('error', (error) => reject(error));
  });
};

await calculateHash();
