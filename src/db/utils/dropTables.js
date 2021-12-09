const dropMembersTable = 'DROP TABLE IF EXISTS members CASCADE';

const dropMeetingsTable = 'DROP TABLE IF EXISTS meetings CASCADE';

const dropTableSequence = [dropMembersTable, dropMeetingsTable];

const dropAllTablesQuery = dropTableSequence.join(';');

export default dropAllTablesQuery;
