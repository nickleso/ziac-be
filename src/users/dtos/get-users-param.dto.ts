import { IsInt, IsOptional } from 'class-validator';

import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class GetUsersParamDto {
  @ApiPropertyOptional({
    description: 'Get user with a specific id',
    example: 5,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
