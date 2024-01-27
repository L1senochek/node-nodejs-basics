import url from 'url';
import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const readStream = fs.createReadStream(fileToCompressPath);
  const writeStream = fs.createWriteStream(archivePath);
  const gzipStream = zlib.createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);

  writeStream.on('error', (error) => console.error(error.message));
};

await compress();
