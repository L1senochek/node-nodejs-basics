import stream from 'stream';

const reverseTransform = new stream.Transform({
  transform(chunk, _, callback) {
    const reversedChunk = chunk.toString().split('').reverse().join('') + '\n';
    callback(null, reversedChunk);
  },
});

const transform = async () =>
  process.stdin.pipe(reverseTransform).pipe(process.stdout);

await transform();
