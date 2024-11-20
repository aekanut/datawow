import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  create() {
    throw new Error('Method not implemented.');
  }
  find() {
    throw new Error('Method not implemented.');
  }
}
