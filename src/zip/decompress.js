import url from 'url';
import path from 'path';
import fs from 'fs';
import zlib from 'zlib';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const archivePath = path.join(__dirname, 'files', 'archive.gz');
const fileToCompressPath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const readStream = fs.createReadStream(archivePath);
  const writeStream = fs.createWriteStream(fileToCompressPath);
  const gunzipStream = zlib.createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);

  writeStream.on('error', (error) => console.error(error.message));
};

await decompress();
