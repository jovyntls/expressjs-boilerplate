import { executeQuery, executeQueryArray } from '/src/utils/queryFunctions';
import { dropAllTables } from '/src/db/utils/dropTables';
import {
  createMembersTable,
  createMeetingsTable,
  createMeetingAttendancesTable,
} from '/src/db/utils/createTables';
import {
  seedMembers,
  seedMeetings,
  seedMeetingAttendances,
} from '/src/db/utils/seeds';

const dropTables = () => executeQuery(dropAllTables);

// createMeetingAttendancesTable depends on createMembersTable and createMeetingsTable
const createTables = () =>
  executeQueryArray([createMembersTable, createMeetingsTable]).then(() =>
    executeQueryArray([createMeetingAttendancesTable])
  );

const seedTables = () =>
  executeQueryArray([seedMembers, seedMeetings, seedMeetingAttendances]);

(async () => {
  await dropTables();
  await createTables();
  await seedTables();
})();
