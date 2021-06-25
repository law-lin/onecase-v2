import * as Knex from 'knex';
import * as dotenv from 'dotenv';
dotenv.config();

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('onecase.comment').del();
  await knex('onecase.journal').del();
  await knex('onecase.user_follower').del();
  await knex('onecase.user').del();
  await knex('onecase_private.user_account').del();
  await knex('onecase_private.admin_account').del();

  // Inserts seed entries
  await knex.raw(`
    SELECT onecase.register_admin('Lawrence', 'lawrence', 'lawrencelin101@gmail.com', '${process.env.ONECASE_ADMIN_PASSWORD}');
    SELECT onecase.register_admin('Jason', 'jason', 'jasonsol45@gmail.com', '${process.env.ONECASE_ADMIN_PASSWORD}');
    SELECT onecase.register_admin('Justin', 'justin', 'qqcjustin@gmail.com', '${process.env.ONECASE_ADMIN_PASSWORD}');
  `);
}
