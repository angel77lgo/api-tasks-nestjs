import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { CoreModule } from './core/core.module';
require('dotenv').config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DATABASE,
    }),
    TasksModule,
    CoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
