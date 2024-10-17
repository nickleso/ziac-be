import {
  Body,
  Controller,
  DefaultValuePipe,
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

  @Get('/:id?')
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
  getProjects(
    @Param() getProjectParamDto: GetProjectsParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.projectsService.findAll(getProjectParamDto, limit, page);
  }

  @Post()
  public createProject(@Body() createProjectDto: CreateProjectDto) {
    return 'You sent a post request to Projects endpoint';
  }

  @Patch()
  public patchProject(@Body() patchProjectDto: PatchProjectDto) {
    return patchProjectDto;
  }
}
