import { executeQuery, executeQueryArray } from '../utils/queryFunctions';
import dropAllTablesQuery from '../utils/dropTables';
import { createMembersTable, createMeetingsTable } from '../utils/createTables';
import { seedMembers, seedMeetings } from './seedTables';

const dropTables = () => executeQuery(dropAllTablesQuery);

const createTables = () =>
  executeQueryArray([createMembersTable, createMeetingsTable]);

const seedTables = () => executeQueryArray([seedMembers, seedMeetings]);

(async () => {
  await dropTables();
  await createTables();
  await seedTables();
})();
