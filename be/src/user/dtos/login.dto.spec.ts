import { validate } from 'class-validator';
import { LoginDto } from './login.dto';

describe('LoginDto', () => {
  let dto: LoginDto;
  beforeAll(() => {
    dto = new LoginDto();
  });

  it('should not return error when dto is correct', async () => {
    dto.username = 'test';

    const errors = await validate(dto);
    expect(errors).toHaveLength(0);
  });
  it('should return error when dto is incorrect with empty string', async () => {
    dto.username = '';

    const errors = await validate(dto);
    expect(errors).not.toHaveLength(0);
  });
  it('should return error when dto is incorrect with number', async () => {
    dto.username = 1 as unknown as string;

    const errors = await validate(dto);
    expect(errors).not.toHaveLength(0);
  });
  it('should return error when dto is incorrect with undefined', async () => {
    dto.username = undefined;

    const errors = await validate(dto);
    expect(errors).not.toHaveLength(0);
  });
});
