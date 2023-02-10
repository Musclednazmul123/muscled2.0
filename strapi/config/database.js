// const parse = require("pg-connection-string").parse;

// const { host, port, database, user, password } = parse(process.env.DB_STRING);

// //production

// module.exports = () => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host,
//       port,
//       database,
//       user,
//       password,
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     },
//     debug: false,
//   },
// });


// Development with increasing timeout
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Knowledge123'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: env('DATABASE_SSL', false)
    },
    acquireConnectionTimeout: 1000000,
    pool: {
      min: 0,
      max: 4,
      acquireTimeoutMillis: 300000,
      createTimeoutMillis: 300000,
      destroyTimeoutMillis: 300000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis:1000,
      createRetryIntervalMillis: 2000
    },
    debug: false,
  },
});


// Development without increasing timeout
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'postgres'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'Knowledge123'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });

