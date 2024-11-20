import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRootAsync({
      imports: [],
      useFactory: async (configService: ConfigService) => {
        const {
          uri,
          username,
          password,
          db: dbName,
        } = configService.get('mongo');

        return {
          uri,
          auth: {
            username,
            password,
          },
          dbName,
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
