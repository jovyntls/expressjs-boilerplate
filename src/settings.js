import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const env = process.env;

export const testEnvironmentVariable = env.TEST_ENV_VAR;
export const connectionString = `postgresql://${env.DB_USER}:${env.DB_PASSWORD}@localhost:${env.DB_PORT}/${env.DB_NAME}`;
