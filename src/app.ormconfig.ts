import { ConnectionOptions } from "typeorm";
require('dotenv').config()

const config: ConnectionOptions = {
  name: 'default',
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  logging: 'all',
  synchronize: false,
  migrationsRun: true,
  migrationsTableName: 'migration',
  migrations: ['src/core/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/core/migrations'
  }
}

export = config;