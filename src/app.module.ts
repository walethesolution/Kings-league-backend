import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user/user.entity';
import { UserSignUpModule } from './user/userSignUp/userSignUp.module';
import { GamesModule } from './games/games.module';
import { PlayersModule } from './players/players.module';
import { EventsModule } from './events/events.module';
import { UpdatesModule } from './updates/updates.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    username: 'thesolution',
    password: 'thesolution',
    database: 'kingsleague',
    port: 5432,
    entities: [User]
  }), UserSignUpModule, GamesModule, PlayersModule, EventsModule, UpdatesModule, StatsModule],
})

@Module({
  imports:[GamesModule],
})

export class AppModule {
  constructor(private datasource: DataSource) {}
}