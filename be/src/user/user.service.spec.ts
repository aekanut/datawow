import { JwtService } from '@nestjs/jwt';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { UserService } from './user.service';
import { Test } from '@nestjs/testing';

describe('UserService', () => {
  const mockFindUser = {
    username: 'a',
    createdAt: new Date(),
  };
  const mockCreateUser = {
    username: 'a',
    createdAt: new Date(),
  };
  const mockUserRepository = {
    findByUsername: jest.fn(),
    createByUsername: jest.fn(),
  };
  const mockJwtService = {
    signAsync: jest.fn(),
  };
  let userService: UserService;

  beforeAll(async () => {
    const testingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: UserRepository, useValue: mockUserRepository },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    userService = testingModule.get<UserService>(UserService);
  });
  beforeEach(() => {
    mockUserRepository.findByUsername.mockResolvedValue(mockFindUser);
    mockUserRepository.createByUsername.mockResolvedValue(mockCreateUser);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  describe('login', () => {
    it('should return JWT from signAsync', async () => {
      mockJwtService.signAsync.mockResolvedValue('accessToken');

      const result = await userService.login(mockFindUser.username);

      expect(result.accessToken).toEqual('accessToken');
    });

    it('should return JWT from findByUsername when user is existing', async () => {
      mockJwtService.signAsync.mockResolvedValue('accessToken');

      await userService.login(mockFindUser.username);

      expect(mockJwtService.signAsync).toHaveBeenCalledTimes(1);
      expect(mockJwtService.signAsync).toHaveBeenCalledWith(mockFindUser);
    });

    it('should return JWT from findByUsername when user does not exist', async () => {
      mockJwtService.signAsync.mockResolvedValue('accessToken');

      await userService.login(mockFindUser.username);

      expect(mockJwtService.signAsync).toHaveBeenCalledTimes(1);
      expect(mockJwtService.signAsync).toHaveBeenCalledWith(mockFindUser);
    });
  });
});
