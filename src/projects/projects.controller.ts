import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProjectsService } from './providers/projects.service';
import { GetProjectsParamDto } from './dtos/get-projects-param.dto';
import { CreateProjectDto } from './dtos/create-project.dto';
import { PatchProjectDto } from './dtos/patch-projects.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('projects')
@ApiTags('Projects')
export class ProjectsController {
  /*
   * Injecting Projects Service
   */
  constructor(private readonly projectsService: ProjectsService) {}

  @ApiOperation({
    summary: 'Fetches a list of projects of the application.',
  })
  @ApiQuery({
    name: 'limit',
    type: String,
    description: 'The upper limit of pages you want the pagination to return',
    required: false,
    example: 20,
  })
  @ApiQuery({
    name: 'page',
    type: String,
    description:
      'The position of the page number that you want the API to return',
    required: false,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Projects fetched successfully based on the query',
  })
  @Get('/:id?')
  public getProjects(
    @Param() getProjectParamDto: GetProjectsParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.projectsService.findAll(getProjectParamDto, limit, page);
  }

  @ApiResponse({
    status: 201,
    description: 'Project added successfully',
  })
  @ApiOperation({
    summary: 'Added a new project to the application.',
  })
  @Post()
  public createProject(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Project updated successfully',
  })
  @ApiOperation({
    summary: 'Updated existing project of the application.',
  })
  @Patch()
  public patchProject(@Body() patchProjectDto: PatchProjectDto) {
    return patchProjectDto;
  }

  @ApiResponse({
    status: 200,
    description: 'Project deleted successfully',
  })
  @ApiOperation({
    summary: 'Deleted existing project of the application.',
  })
  @Delete('/:id')
  public deleteProject(@Param() getProjectParamDto: GetProjectsParamDto) {
    return this.projectsService.delete(getProjectParamDto.id);
  }
}
