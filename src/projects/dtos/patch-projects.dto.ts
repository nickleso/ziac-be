import { CreateProjectDto } from './create-project.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class PatchProjectDto extends PartialType(CreateProjectDto) {
  @ApiProperty({
    description: 'The ID of the project that needs to be updated',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
