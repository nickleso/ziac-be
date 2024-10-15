import { IsInt, IsOptional } from '@nestjs/class-validator';
import { Type } from '@nestjs/class-transformer';

export class GetProjectsParamDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
