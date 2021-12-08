import { testEnvironmentVariable } from 'src/settings';

export const getSample = (req, res) =>
  res.status(200).json({
    message: `Your environment variable should appear here: ${testEnvironmentVariable}`,
  });
