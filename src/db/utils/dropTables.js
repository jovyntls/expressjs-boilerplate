const dropMembersTable = 'DROP TABLE IF EXISTS members CASCADE';

const dropMeetingsTable = 'DROP TABLE IF EXISTS meetings CASCADE';

const dropMeetingAttendancesTable =
  'DROP TABLE IF EXISTS meeting_attendances CASCADE';

const dropTableSequence = [
  dropMeetingAttendancesTable,
  dropMembersTable,
  dropMeetingsTable,
];

export const dropAllTables = dropTableSequence.join(';');
