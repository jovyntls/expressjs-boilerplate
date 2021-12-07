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

// MEETING ATTENDANCES
export const createMeetingAttendancesTable = `
DROP TABLE IF EXISTS meeting_attendances;
CREATE TABLE IF NOT EXISTS meeting_attendances (
  id SERIAL PRIMARY KEY,
  meeting_id INTEGER NOT NULL REFERENCES meetings (id),
  member_id INTEGER NOT NULL REFERENCES members (id),
  UNIQUE (member_id, meeting_id)
  )
  `;
