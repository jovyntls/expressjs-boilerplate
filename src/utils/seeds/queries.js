// MEMBERS
export const createMembersTable = `
DROP TABLE IF EXISTS members;
CREATE TABLE IF NOT EXISTS members (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
  )
  `;

export const seedMembers = `
INSERT INTO members(name, email)
VALUES ('John Smith', 'johnsmith@mail.com'),
      ('Jane Doe', 'jane.doe@school.edu.sg'),
      ('Tan Xiao Ming', 'txm@gmail.com'),
      ('Alice', 'alice@email.com'),
      ('Bob', 'bob@mail.com')
`;

export const dropMembersTable = 'DROP TABLE IF EXISTS members CASCADE';

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

export const seedMeetings = `
INSERT INTO meetings(name, datetime)
VALUES ('SD Dept Meeting', '2021-10-19 10:00:00'),
      ('Society Monthly Meeting', '2021-10-1 13:45:16'),
      ('Society Monthly Meeting', '2021-11-1 13:00:00'),
      ('Society Monthly Meeting', '2021-12-1 12:34:00'),
      ('Important thing', '2021-10-30 19:30:00')
`;

export const dropMeetingsTable = 'DROP TABLE IF EXISTS meetings CASCADE';

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

export const seedMeetingAttendances = `
INSERT INTO meeting_attendances(meeting_id, member_id)
VALUES (1, 1),
      (1, 2),
      (1, 3),
      (2, 1),
      (2, 2), 
      (2, 5),
      (3, 1),
      (3, 2),
      (4, 1)
`;

export const dropMeetingAttendancesTable =
  'DROP TABLE IF EXISTS meeting_attendances CASCADE';
