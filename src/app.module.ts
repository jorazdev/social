import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
dotenv.config()
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import  entities  from './entity'

@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '../public'),
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(<string>process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: entities,
    synchronize: true,
    autoLoadEntities: true
  }),
  UserModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
