const parseEnv = () => {
  const environmentVariables = process.env;
  const rssVariables = Object.entries(environmentVariables).filter(([key]) =>
    key.startsWith('RSS_')
  );
  const variables = rssVariables
    .map(([key, value]) => `${key}=${value}`)
    .join('; ');

  console.log("environment variables with prefix 'RSS_':", variables);
};

parseEnv();
