import * as Knex from 'knex';
import * as dotenv from 'dotenv';
dotenv.config();

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex.raw(`
    SELECT onecase.register_user('Lawrence', 'lawlin','lawrence.lin@stonybrook.edu', 'asdf1234');
  `);
}
