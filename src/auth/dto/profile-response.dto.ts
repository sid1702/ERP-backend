import { ApiProperty } from '@nestjs/swagger';

export class ProfileResponseDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  message: string;

  @ApiProperty()
  user: {
    id: number;
    username: string;
    createdAt?: Date;
    lastLogin?: Date;
  };
} 