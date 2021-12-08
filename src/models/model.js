import { pool } from 'src/db/pools';

class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on(
      'error',
      (err, client) => `Error, ${err}, on idle client ${client}`
    );
  }
}

export default Model;
