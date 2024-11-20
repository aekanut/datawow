import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createByUsername(username: string) {
    const user = await this.userModel.create({ username });
    return user.save();
  }

  async findByUsername(username: string) {
    return this.userModel.findOne({ username });
  }
}
