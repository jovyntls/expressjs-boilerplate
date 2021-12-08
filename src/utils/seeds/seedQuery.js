import { executeQuery, executeQueryArray } from '/src/utils/queryFunctions';
import { dropAllTablesQuery } from '/src/db/utils/dropTables';
import {
  createMembersTable,
  createMeetingsTable,
} from '/src/db/utils/createTables';
import { seedMembers, seedMeetings } from '/src/db/utils/seeds';

const dropTables = () => executeQuery(dropAllTablesQuery);

const createTables = () =>
  executeQueryArray([createMembersTable, createMeetingsTable]);

const seedTables = () => executeQueryArray([seedMembers, seedMeetings]);

(async () => {
  await dropTables();
  await createTables();
  await seedTables();
})();
