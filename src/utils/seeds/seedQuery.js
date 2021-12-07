import { createTables, dropTables, seedTables } from './queryFunctions';

(async () => {
  await dropTables();
  await createTables();
  await seedTables();
})();
