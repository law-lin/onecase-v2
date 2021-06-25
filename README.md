# OneCase v2

This version of the project is not being maintained anymore and the code has been made public for anyone interested. This site is being hosted at https://onecase.app - we haven't yet made it public for anyone to try, but we will soon. You can find my profile at https://onecase.app/lawrence. This is being hosted on a free Heroku dyno that sleeps when not being used, so give it a couple of seconds to load.

We're currently working on our next iteration of OneCase with a mobile first approach this time, using React Native and Supabase to develop it. Look out for it!

## Application Stack
- TypeScript
- Node.js
- PostgreSQL
- GraphQL
- Postgraphile
- React

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
