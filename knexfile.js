module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user: "postgres",
      host: "localhost",
      database: "postgres",
      password: "postgres",
      port: 5432
    }
  }
};

// module.exports = {
//   development: {
//     client: 'postgresql',
//     connection: {
//       user: "postgres",
//       host: "335f69603048",
//       database: "postgres",
//       password: "postgres",
//       port: 5432
//     },
//     migrations: {
//       tableName: "post"
//     }
//   }
// };