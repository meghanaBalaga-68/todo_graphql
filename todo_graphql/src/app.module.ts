import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './config/db.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TodoResolver } from './todo/todo.resolver';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [dbConfig],
      expandVariables: true,
      envFilePath: `${process.env.NODE_ENV??''}.env`
    }),
    TypeOrmModule.forRootAsync({
      useFactory: dbConfig,
    }),
    TodoModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      subscriptions: {
        'graphql-ws': false,
      },
     
    })
  ],
  controllers: [AppController],
  providers: [AppService, TodoResolver],
})
export class AppModule {}
