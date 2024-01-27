const parseArgs = () => {
  const args = process.argv.slice(2);
  let resultStr = '';

  args.forEach((arg) =>
    arg.startsWith('--')
      ? (resultStr += arg.slice(2))
      : (resultStr += ` is ${arg} `)
  );

  console.log(resultStr);
};

parseArgs();
