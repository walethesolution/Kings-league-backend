import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { UserSignUpModule } from './user/userSignUp/userSignUp.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    username: 'thesolution',
    password: 'thesolution',
    database: 'kingsleague',
    port: 5432,
    entities: [User]
  }), UserSignUpModule],
})

export class AppModule {
  constructor(private datasource: DataSource) {}
}