const dropMembersTable = 'DROP TABLE IF EXISTS members CASCADE';

const dropMeetingsTable = 'DROP TABLE IF EXISTS meetings CASCADE';

const dropTableSequence = [
  dropMembersTable,
  dropMeetingsTable,
];

export const dropAllTables = dropTableSequence.join(';');
