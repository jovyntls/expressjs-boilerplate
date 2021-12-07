// MEMBERS
export const createMembersTable = `
DROP TABLE IF EXISTS members;
CREATE TABLE IF NOT EXISTS members (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  telegram_handle TEXT UNIQUE,
  eth_address TEXT UNIQUE
  )
  `;

// MEETINGS
export const createMeetingsTable = `
DROP TABLE IF EXISTS meetings;
CREATE TABLE IF NOT EXISTS meetings (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  datetime TIMESTAMP NOT NULL,
  UNIQUE (name, datetime)
  )
  `;

