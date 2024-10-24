import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({
    description: 'Project title',
    example: 'This is project title',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  title: string;

  @ApiPropertyOptional({
    description: 'Project description',
    example: 'This is project description',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(1024)
  description?: string;

  // @ApiPropertyOptional({
  //   description: 'Project image Url',
  //   example: 'http://localhost:3000/images/projects-image-1.jpg',
  //   required: false,
  // })
  // @IsString()
  // @IsOptional()
  // @IsUrl()
  // projectImageUrl?: string;
}
