import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './infrastructure/schemas/user.schema';
import { UserService } from './user.service';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const jwtSecret = configService.get('jwtSecret');
        return { secret: jwtSecret };
      },
    }),
  ],
  controllers: [],
  providers: [UserService, UserRepository],
})
export class UserModule {}
