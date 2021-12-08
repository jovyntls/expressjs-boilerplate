import { Pool } from 'pg';
import dotenv from 'dotenv';
import { connectionString } from 'src/settings';

dotenv.config();

export const pool = new Pool({ connectionString });
