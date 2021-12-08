const PG_ERROR_DUPLICATE_KEY = '23505';
const PG_ERROR_NOT_NULL = '23502';

export const handlePgError = (err, res, modelName) => {
  if (err.code === PG_ERROR_DUPLICATE_KEY) {
    res.status(400).json({
      error: `This entry already exists in '${modelName}'`,
    });
  } else if (err.code === PG_ERROR_NOT_NULL) {
    res.status(400).json({ error: 'Params are missing.' });
  } else {
    res.status(500).json({ error: err.stack });
  }
};
