import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'username',
    type: String,
    example: 'user1'
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  username: string;

  @ApiProperty({
    description: 'displayName',
    type: String,
    example: 'Mohammad'
  })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  displayName?: string;

  @ApiProperty({
    description: 'email',
    type: String,
    example: 'user1@example.com'
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}