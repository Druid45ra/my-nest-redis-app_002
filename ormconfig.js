module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "nestuser",
  password: "nestpass",
  database: "nestdb",
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true,
};
