# OneCase v2

## Application Stack
- TypeScript
- Node.js
- PostgreSQL
- GraphQL
- Postgraphile
- React
- Ant Design

## Setting Up

1. `npx knex migrate:latest` to update the schema to the database.
2. `npx knex seed:run` to run all seed files.
3. `npm run start:dev` to start the server under `server/`.
4. `npm start` to start the client under `client/`.

## Backend

### Postgraphile

After starting the server with `npm run start:dev`, you can access the Postgraphile interface [here](http://localhost:8080/graphiql)

### PostgreSQL

If you want to access the DB with the CLI, use `psql` and do `\c onecase` to connect to the DB.

### Knex

Knex commands you'll need:

`npx knex migrate:make <name>` to create a new migration file.

`npx knex migrate:latest` to update the schema to the database.

`npx knex seed:make <name>` to create a seed file.

`npx knex seed:run` to run all seed files.

[Knex cheatsheet](https://devhints.io/knex)

## Frontend

### JSS

`import { createUseStyles } from 'react-jss';`

Most styling is done directly in the same file as the component itself with JSS (CSS-in-JS)

### GraphQL Codegen

Run `yarn codegen` everytime a new query or mutation is created to generate new code to be used in our frontend. Make sure to add the query/mutation to `utils/services.ts` as well.
