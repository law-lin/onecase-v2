import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.withSchema('onecase').createTable('journal', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('title', 255).notNullable();
    table.string('color', 255).defaultTo('#11110A');
    table.boolean('is_private').defaultTo(false);
    table.specificType('content', 'JSONB[]');
    table.specificType('toolbox', 'JSONB[]');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table
      .uuid('user_id')
      .notNullable()
      .references('user_id')
      .inTable('onecase.user');
  });
  await knex.schema.withSchema('onecase').createTable('tool', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.jsonb('content');
    table.integer('likes').notNullable().defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table
      .uuid('user_id')
      .notNullable()
      .references('user_id')
      .inTable('onecase.user');
    table
      .uuid('journal_id')
      .notNullable()
      .references('id')
      .inTable('onecase.journal')
      .onDelete('CASCADE');
  });
  await knex.schema
    .withSchema('onecase')
    .createTable('user_tool_like', (table) => {
      table.primary(['user_id', 'tool_id']);
      table.boolean('is_liked').notNullable().defaultTo(false);
      table
        .uuid('user_id')
        .notNullable()
        .references('user_id')
        .inTable('onecase.user');
      table
        .uuid('tool_id')
        .notNullable()
        .references('id')
        .inTable('onecase.tool')
        .onDelete('CASCADE');
    });
  await knex.schema.withSchema('onecase').createTable('comment', (table) => {
    table
      .uuid('comment_id')
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
    table.text('comment').notNullable();
    table.integer('likes').notNullable().defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table
      .uuid('user_id')
      .notNullable()
      .references('user_id')
      .inTable('onecase.user');
    table
      .uuid('journal_id')
      .notNullable()
      .references('id')
      .inTable('onecase.journal')
      .onDelete('CASCADE');
    table
      .uuid('parent_comment_id')
      .references('comment_id')
      .inTable('onecase.comment')
      .defaultTo(null);
  });
  await knex.schema.withSchema('onecase').createTable('like', (table) => {
    table.uuid('like_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.boolean('is_liked').notNullable().defaultTo(false);
    table
      .uuid('user_id')
      .notNullable()
      .references('user_id')
      .inTable('onecase.user');
    table
      .uuid('comment_id')
      .notNullable()
      .references('comment_id')
      .inTable('onecase.comment')
      .onDelete('CASCADE');
  });
  await knex.schema
    .withSchema('onecase')
    .createTable('case_comment', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.text('comment').notNullable();
      table.integer('likes').notNullable().defaultTo(0);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table
        .uuid('user_id')
        .notNullable()
        .references('user_id')
        .inTable('onecase.user');
      table
        .uuid('tool_id')
        .notNullable()
        .references('id')
        .inTable('onecase.tool')
        .onDelete('CASCADE');
      table
        .uuid('parent_comment_id')
        .references('id')
        .inTable('onecase.case_comment')
        .defaultTo(null);
    });
  await knex.schema.withSchema('onecase').createTable('case_like', (table) => {
    table.uuid('like_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.boolean('is_liked').notNullable().defaultTo(false);
    table
      .uuid('user_id')
      .notNullable()
      .references('user_id')
      .inTable('onecase.user');
    table
      .uuid('case_comment_id')
      .notNullable()
      .references('id')
      .inTable('onecase.case_comment')
      .onDelete('CASCADE');
  });
  await knex.schema
    .withSchema('onecase')
    .createTable('user_follower', (table) => {
      table.primary(['user_id', 'follower_id']);
      table
        .uuid('user_id')
        .notNullable()
        .references('user_id')
        .inTable('onecase.user');
      table
        .uuid('follower_id')
        .notNullable()
        .references('user_id')
        .inTable('onecase.user');
    });
  return knex.raw(`
    ALTER TABLE onecase.journal ENABLE ROW LEVEL SECURITY;
    ALTER TABLE onecase.tool ENABLE ROW LEVEL SECURITY;
    ALTER TABLE onecase.user_tool_like ENABLE ROW LEVEL SECURITY;
    ALTER TABLE onecase.comment ENABLE ROW LEVEL SECURITY;
    ALTER TABLE onecase.like ENABLE ROW LEVEL SECURITY;
    ALTER TABLE onecase.case_comment ENABLE ROW LEVEL SECURITY;
    ALTER TABLE onecase.case_like ENABLE ROW LEVEL SECURITY;
    ALTER TABLE onecase.user_follower ENABLE ROW LEVEL SECURITY;

    GRANT SELECT ON TABLE onecase.journal TO onecase_anonymous, onecase_user;
    GRANT SELECT ON TABLE onecase.tool TO onecase_anonymous, onecase_user;
    GRANT SELECT ON TABLE onecase.user_tool_like TO onecase_anonymous, onecase_user;
    GRANT SELECT ON TABLE onecase.comment TO onecase_anonymous, onecase_user;
    GRANT SELECT ON TABLE onecase.like TO onecase_anonymous, onecase_user;
    GRANT SELECT ON TABLE onecase.case_comment TO onecase_anonymous, onecase_user;
    GRANT SELECT ON TABLE onecase.case_like TO onecase_anonymous, onecase_user;
    GRANT SELECT ON TABLE onecase.user_follower TO onecase_anonymous, onecase_user;
    GRANT INSERT, UPDATE, DELETE ON TABLE onecase.journal TO onecase_user;
    GRANT INSERT, UPDATE, DELETE ON TABLE onecase.tool TO onecase_user;
    GRANT INSERT, UPDATE, DELETE ON TABLE onecase.user_tool_like TO onecase_user;
    GRANT INSERT, UPDATE, DELETE ON TABLE onecase.comment TO onecase_user;
    GRANT INSERT, UPDATE, DELETE ON TABLE onecase.like TO onecase_user;
    GRANT INSERT, UPDATE, DELETE ON TABLE onecase.case_comment TO onecase_user;
    GRANT INSERT, UPDATE, DELETE ON TABLE onecase.case_like TO onecase_user;
    GRANT INSERT, UPDATE, DELETE ON TABLE onecase.user_follower to onecase_user;

    CREATE POLICY select_journal ON onecase.journal FOR SELECT USING (true);
    CREATE POLICY insert_journal ON onecase.journal FOR INSERT WITH CHECK (user_id = onecase.current_user_id());
    CREATE POLICY update_journal ON onecase.journal FOR UPDATE USING (user_id = onecase.current_user_id());
    CREATE POLICY delete_journal ON onecase.journal FOR DELETE USING (user_id = onecase.current_user_id());
    
    CREATE POLICY select_tool ON onecase.tool FOR SELECT USING (true);
    CREATE POLICY insert_tool ON onecase.tool FOR INSERT WITH CHECK (user_id = onecase.current_user_id());
    CREATE POLICY update_tool ON onecase.tool FOR UPDATE USING (user_id = onecase.current_user_id());
    CREATE POLICY delete_tool ON onecase.tool FOR DELETE USING (user_id = onecase.current_user_id());

    CREATE POLICY select_tool ON onecase.user_tool_like FOR SELECT USING (true);
    CREATE POLICY insert_user_tool_like ON onecase.user_tool_like FOR INSERT WITH CHECK (user_id = onecase.current_user_id());
    CREATE POLICY update_user_tool_like ON onecase.user_tool_like FOR UPDATE USING (user_id = onecase.current_user_id());
    CREATE POLICY delete_user_tool_like ON onecase.user_tool_like FOR DELETE USING (user_id = onecase.current_user_id());

    CREATE POLICY select_comment ON onecase.comment FOR SELECT USING (true);
    CREATE POLICY insert_comment ON onecase.comment FOR INSERT WITH CHECK (user_id = onecase.current_user_id());
    CREATE POLICY update_comment ON onecase.comment FOR UPDATE USING (true);
    CREATE POLICY delete_comment ON onecase.comment FOR DELETE USING (user_id = onecase.current_user_id());

    CREATE POLICY select_like ON onecase.like FOR SELECT USING (true);
    CREATE POLICY insert_like ON onecase.like FOR INSERT WITH CHECK (user_id = onecase.current_user_id());
    CREATE POLICY update_like ON onecase.like FOR UPDATE USING (user_id = onecase.current_user_id());
    CREATE POLICY delete_like ON onecase.like FOR DELETE USING (user_id = onecase.current_user_id());

    CREATE POLICY select_case_comment ON onecase.case_comment FOR SELECT USING (true);
    CREATE POLICY insert_case_comment ON onecase.case_comment FOR INSERT WITH CHECK (user_id = onecase.current_user_id());
    CREATE POLICY update_case_comment ON onecase.case_comment FOR UPDATE USING (true);
    CREATE POLICY delete_case_comment ON onecase.case_comment FOR DELETE USING (user_id = onecase.current_user_id());

    CREATE POLICY select_case_like ON onecase.case_like FOR SELECT USING (true);
    CREATE POLICY insert_case_like ON onecase.case_like FOR INSERT WITH CHECK (user_id = onecase.current_user_id());
    CREATE POLICY update_case_like ON onecase.case_like FOR UPDATE USING (user_id = onecase.current_user_id());
    CREATE POLICY delete_case_like ON onecase.case_like FOR DELETE USING (user_id = onecase.current_user_id());
    
    CREATE POLICY select_user_follower ON onecase.user_follower FOR SELECT USING (true);
    CREATE POLICY insert_user_follower ON onecase.user_follower FOR INSERT WITH CHECK (follower_id = onecase.current_user_id());
    CREATE POLICY update_user_follower ON onecase.user_follower FOR UPDATE USING (follower_id = onecase.current_user_id());
    CREATE POLICY delete_user_follower ON onecase.user_follower FOR DELETE USING (follower_id = onecase.current_user_id());

    CREATE FUNCTION onecase.profile_cases(u_id uuid)
    RETURNS SETOF onecase.tool AS $$
      SELECT t.id, t.content, t.likes, t.created_at, t.user_id, t.journal_id FROM onecase.tool t
      JOIN onecase.journal j ON t.journal_id = j.id
      WHERE t.user_id = u_id AND (u_id = onecase.current_user_id() OR j.is_private = false)
      ORDER BY t.created_at DESC;
    $$ LANGUAGE sql STABLE;

    CREATE FUNCTION onecase.cases_feed()
    RETURNS SETOF onecase.tool AS $$
      SELECT t.id, t.content, t.likes, t.created_at, t.user_id, t.journal_id FROM onecase.tool t
      LEFT JOIN onecase.user_follower f ON t.user_id = f.user_id
      JOIN onecase.journal j ON t.journal_id = j.id
      WHERE t.user_id = onecase.current_user_id() OR (follower_id = onecase.current_user_id() AND j.is_private = false) 
      ORDER BY t.created_at DESC;
    $$ LANGUAGE sql STABLE;
    `);
}

export async function down(knex: Knex): Promise<void> {
  await knex.raw(`
  DROP FUNCTION onecase.cases_feed();
  DROP FUNCTION onecase.profile_cases();
`);

  return knex.schema
    .dropTable('onecase.user_follower')
    .dropTable('onecase.case_like')
    .dropTable('onecase.case_comment')
    .dropTable('onecase.like')
    .dropTable('onecase.comment')
    .dropTable('onecase.user_tool_like')
    .dropTable('onecase.tool')
    .dropTable('onecase.journal');
}
