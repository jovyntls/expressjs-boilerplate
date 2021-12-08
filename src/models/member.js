import Model from './model';

class MemberModel extends Model {
  constructor(table) {
    super(table);
  }

  async listAllMembers() {
    let query = `SELECT name, email FROM ${this.table}`;
    return this.pool.query(query);
  }

  async createMember(name, email, telegram_handle) {
    const query = `INSERT INTO ${this.table} (name, email, telegram_handle) VALUES ($1, $2, $3) RETURNING *`;
    return this.pool.query(query, [name, email, telegram_handle]);
  }

  async deleteMember(id) {
    const query = `DELETE FROM ${this.table} WHERE id=$1`;
    return this.pool.query(query, [id]);
  }
}

export default MemberModel;
