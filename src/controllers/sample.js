import { testEnvironmentVariable } from 'src/settings';

const getSample = (req, res) =>
  res.status(200).json({
    message: `Your environment variable should appear here: ${testEnvironmentVariable}`,
  });

export default getSample;
