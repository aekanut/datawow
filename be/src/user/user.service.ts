import { Injectable } from '@nestjs/common';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string): Promise<{ accessToken: string }> {
    let user = await this.userRepository.findByUsername(username);
    if (!user) {
      user = await this.userRepository.createByUsername(username);
    }

    const payload = {
      username: user.username,
      createdAt: user.createdAt,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
