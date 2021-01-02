import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { YellowModule } from './yellow/yellow.module';
import { HouseModule } from './house/house.module';

@Module({
  imports: [
    YellowModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    HouseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
