import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex('onecase.journal').del();
  // let user = await knex('onecase.user').where('username', 'lawlin').first();
  // // Inserts seed entries
  // await knex('onecase.journal').insert([
  //   {
  //     title: 'Software Systems Grind',
  //     content: [
  //       {
  //         type: 'text',
  //         content:
  //           'Taking this class at stonybrook and I really think i’m gonna fail. I can’t figure out any assignment jesus christ.',
  //       },
  //       {
  //         type: 'image',
  //         content: [
  //           {
  //             name: 'github.png',
  //             url:
  //               'https://cdn.discordapp.com/attachments/736717399159734342/791579755710775296/unknown.png',
  //           },
  //         ],
  //       },
  //       {
  //         type: 'text',
  //         content:
  //           'I spent hours on stackoverflow and reviewing the work and was able to get a lot of progress done. I got no sleep, but I think i’m ready for the test today.',
  //       },
  //       {
  //         type: 'image',
  //         content: [
  //           {
  //             name: 'rubikscube.png',
  //             url:
  //               'https://cdn.discordapp.com/attachments/736717399159734342/791579780062904350/unknown.png',
  //           },
  //           {
  //             name: 'code.png',
  //             url:
  //               'https://cdn.discordapp.com/attachments/736717399159734342/791579802087325706/unknown.png',
  //           },
  //         ],
  //       },
  //       {
  //         type: 'text',
  //         content: '',
  //       },
  //     ],
  //     user_id: user.user_id,
  //   },
  // ]);
}
