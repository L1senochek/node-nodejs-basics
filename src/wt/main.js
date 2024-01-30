import url from 'url';
import path from 'path';
import { Worker } from 'worker_threads';
import { availableParallelism } from 'os';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'worker.js');

const runWorker = (data) =>
  new Promise((resolve, reject) => {
    const worker = new Worker(filePath, { workerData: data });

    worker.on('message', (message) =>
      resolve({ status: 'resolved', data: message })
    );
    worker.on('error', (err) => reject(err));
  });

const performCalculations = async () => {
  const numWorkers = availableParallelism();
  const startNumber = 10;

  const workerResults = await Promise.all(
    Array.from({ length: numWorkers }, (_, i) => i + startNumber).map((data) =>
      runWorker(data)
    )
  );

  console.log(workerResults);
};

await performCalculations();
