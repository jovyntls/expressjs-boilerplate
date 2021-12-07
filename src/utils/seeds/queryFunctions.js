import { pool } from '../../models/pools';
import {
  createMembersTable,
  dropMembersTable,
  seedMembers,
  createMeetingsTable,
  dropMeetingsTable,
  seedMeetings,
  createMeetingAttendancesTable,
  dropMeetingAttendancesTable,
  seedMeetingAttendances,
} from './queries';

export const executeQueryArray = async (arr) =>
  new Promise((resolve) => {
    const stop = arr.length;
    arr.forEach(async (q, index) => {
      await pool.query(q);
      if (index + 1 === stop) resolve();
    });
  });

// createMembersTable and createMeetingsTable can only be dropped after createMeetingAttendancesTable 
export const dropTables = () =>
  executeQueryArray([dropMeetingAttendancesTable]).then(() =>
    executeQueryArray([dropMembersTable, dropMeetingsTable])
  );

// createMeetingAttendancesTable depends on createMembersTable and createMeetingsTable
export const createTables = () =>
  executeQueryArray([createMembersTable, createMeetingsTable]).then(() =>
    executeQueryArray([createMeetingAttendancesTable])
  );

export const seedTables = () =>
  executeQueryArray([seedMembers, seedMeetings, seedMeetingAttendances]);
