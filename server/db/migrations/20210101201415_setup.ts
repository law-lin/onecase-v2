import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; 
    CREATE EXTENSION IF NOT EXISTS "pgcrypto"; 
    CREATE EXTENSION IF NOT EXISTS "citext";`);
  await knex.schema.createSchema('onecase').createSchema('onecase_private');
  await knex.raw(`
    CREATE ROLE onecase_postgraphile LOGIN PASSWORD '(9+f"M=(=-.x.Nd$';
    CREATE ROLE onecase_admin;
    CREATE ROLE onecase_anonymous;
    GRANT onecase_anonymous TO onecase_postgraphile;
    GRANT onecase_anonymous TO onecase_admin;
    CREATE ROLE onecase_user;
    GRANT onecase_user TO onecase_postgraphile;
    GRANT onecase_user TO onecase_admin;`);

  await knex.schema.withSchema('onecase').createTable('user', (table) => {
    table.uuid('user_id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name', 255).notNullable();
    table.string('username', 255).notNullable().unique();
    table.text('profile_picture');
    table.text('cover_image');
    table.text('biography');
    table.boolean('account_verified').notNullable().defaultTo(false);
    table.boolean('is_admin').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });

  await knex.schema
    .withSchema('onecase_private')
    .createTable('user_account', (table) => {
      table
        .uuid('user_id')
        .primary()
        .references('user_id')
        .inTable('onecase.user')
        .onDelete('CASCADE');
      table.specificType('email', 'CITEXT').notNullable().unique();
      table.text('password').notNullable();
    });

  await knex.schema
    .withSchema('onecase_private')
    .createTable('admin_account', (table) => {
      table
        .uuid('admin_id')
        .primary()
        .references('user_id')
        .inTable('onecase.user')
        .onDelete('CASCADE');
      table.specificType('email', 'CITEXT').notNullable().unique();
      table.text('password').notNullable();
    });

  return knex.raw(`
    CREATE TYPE onecase.jwt_token as (
      role TEXT,
      user_id UUID
    );

    CREATE FUNCTION onecase.current_user_id() RETURNS UUID AS $$
      SELECT current_setting('jwt.claims.user_id', true)::uuid;
    $$ LANGUAGE sql STABLE;

    CREATE FUNCTION onecase.current_user_role() RETURNS TEXT AS $$
      SELECT current_setting('jwt.claims.role', true)::text;
    $$ LANGUAGE sql STABLE;

    ALTER TABLE onecase.user ENABLE ROW LEVEL SECURITY;
    CREATE POLICY select_user ON onecase.user FOR SELECT USING (true);
    CREATE POLICY update_user ON onecase.user FOR UPDATE TO onecase_user USING (user_id = onecase.current_user_id() OR onecase.current_user_role() = 'onecase_admin');
    CREATE POLICY delete_user ON onecase.user FOR DELETE TO onecase_user USING (user_id = onecase.current_user_id() OR onecase.current_user_role() = 'onecase_admin');

    CREATE FUNCTION onecase.register_user(
      name VARCHAR(255),
      username VARCHAR(255),
      email citext,
      password TEXT
    ) RETURNS onecase.user AS $$
    DECLARE
      new_user onecase.user;
    BEGIN
      INSERT INTO onecase.user (name, username) VALUES
        (name, username)
        RETURNING * INTO new_user;
    
      INSERT INTO onecase_private.user_account (user_id, email, password) VALUES
        (new_user.user_id, email, crypt(password, gen_salt('bf')));
    
      return new_user;
    END;
    $$ LANGUAGE plpgsql STRICT SECURITY DEFINER;

    CREATE FUNCTION onecase.register_admin(
      name VARCHAR(255),
      username VARCHAR(255),
      email citext,
      password TEXT
    ) RETURNS onecase.user AS $$
    DECLARE
      new_user onecase.user;
    BEGIN
      INSERT INTO onecase.user (name, username, account_verified, is_admin) VALUES
        (name, username, true, true)
        RETURNING * INTO new_user;
    
      INSERT INTO onecase_private.admin_account (admin_id, email, password) VALUES
        (new_user.user_id, email, crypt(password, gen_salt('bf')));
    
      return new_user;
    END;
    $$ LANGUAGE plpgsql STRICT SECURITY DEFINER;

    CREATE FUNCTION onecase.authenticate(
      email citext,
      password TEXT
    ) RETURNS onecase.jwt_token AS $$
    DECLARE
      account onecase_private.user_account;
    BEGIN
      SELECT o.* INTO account
      FROM onecase_private.user_account as o
      WHERE o.email = $1;
    
      if account.password = crypt(password, account.password) then
        return ('onecase_user', account.user_id)::onecase.jwt_token;
      else
        return null;
      end if;
    END;
    $$ LANGUAGE plpgsql STRICT SECURITY DEFINER;
    
    CREATE FUNCTION onecase.authenticate_admin(
      email citext,
      password TEXT
    ) RETURNS onecase.jwt_token AS $$
    DECLARE
      account onecase_private.user_account;
    BEGIN
      SELECT o.* INTO account
      FROM onecase_private.admin_account as o
      WHERE o.email = $1;
    
      if account.password = crypt(password, account.password) then
        return ('onecase_admin', account.user_id)::onecase.jwt_token;
      else
        return null;
      end if;
    END;
    $$ LANGUAGE plpgsql STRICT SECURITY DEFINER;

    CREATE FUNCTION onecase.current_user() RETURNS onecase.user AS $$
      SELECT *
      FROM onecase.user
      WHERE user_id = onecase.current_user_id()
    $$ LANGUAGE sql STABLE;

    GRANT USAGE ON SCHEMA onecase TO onecase_anonymous, onecase_user, onecase_admin;
    GRANT SELECT ON TABLE onecase.user TO onecase_anonymous, onecase_user, onecase_admin;
    GRANT UPDATE, DELETE ON TABLE onecase.user TO onecase_user, onecase_admin;
    GRANT EXECUTE ON FUNCTION onecase.authenticate(citext, text) TO onecase_anonymous, onecase_user;
    GRANT EXECUTE ON FUNCTION onecase.authenticate_admin(citext, text) TO onecase_anonymous, onecase_admin;
    GRANT EXECUTE ON FUNCTION onecase.register_user(VARCHAR(255), VARCHAR(255), citext, text) TO onecase_anonymous, onecase_admin;
    GRANT EXECUTE ON FUNCTION onecase.register_admin(VARCHAR(255), VARCHAR(255), citext, text) TO onecase_admin;
    GRANT EXECUTE ON FUNCTION onecase.current_user() TO onecase_anonymous, onecase_user;`);
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`
    DROP TABLE onecase_private.admin_account, onecase_private.user_account, onecase.user CASCADE; 
    DROP SCHEMA onecase_private, onecase CASCADE;
    DROP ROLE IF EXISTS onecase_anonymous;
    DROP ROLE IF EXISTS onecase_user;
    DROP ROLE IF EXISTS onecase_admin;
    DROP ROLE IF EXISTS onecase_postgraphile;`);
}
