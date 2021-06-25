import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex('onecase.comment').del();
  // let user = await knex('onecase.user').where('username', 'souljason').first();
  // let post = await knex('onecase.post')
  //   .where('description', 'Learning how to code in C')
  //   .first();
  // // Inserts seed entries
  // await knex('onecase.comment').insert([
  //   {
  //     comment: 'Great job!',
  //     user_id: user.user_id,
  //     post_id: post.post_id,
  //     comment_id: '178dd10a-a85f-4610-8d0a-a36a224e4553',
  //     likes: 0,
  //   },
  //   {
  //     comment: 'Never mind, could be better...',
  //     user_id: user.user_id,
  //     post_id: post.post_id,
  //     parent_comment_id: '178dd10a-a85f-4610-8d0a-a36a224e4553',
  //     likes: 0,
  //   },
  // ]);
}
