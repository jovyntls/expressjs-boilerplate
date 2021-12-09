import pool from 'db/pools';

export const executeQueryArray = async (arr) =>
  new Promise((resolve) => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
      await pool.query(q);
      if (index + 1 === stop) resolve();
    });
  });

export const executeQuery = async (q) => pool.query(q);
