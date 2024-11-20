import { Injectable } from '@nestjs/common';
import { UserRepository } from './infrastructure/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  login(): { accessToken: string } {
    return { accessToken: '' };
  }

  logout(): undefined {
    return;
  }
}
