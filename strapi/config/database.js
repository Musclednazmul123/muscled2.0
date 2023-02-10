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
    acquireConnectionTimeout: 10000000,
    pool: {
      min: 0,
      max: 4,
      acquireTimeoutMillis: 3000000,
      createTimeoutMillis: 3000000,
      destroyTimeoutMillis: 3000000,
      idleTimeoutMillis: 300000,
      reapIntervalMillis:1000,
      createRetryIntervalMillis: 2000
    },
    debug: false,
  },
});

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

