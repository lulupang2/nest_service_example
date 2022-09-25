import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { TimeController } from './time/time.controller';
import { TimeService } from './time/time.service';
import { UsersModule } from './users/users.module';

@Module({
  // imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, TimeController],
  providers: [AppService, TimeService],
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/mydb')],
})
export class AppModule {}
