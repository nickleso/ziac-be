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

@Controller('projects')
export class ProjectsController {
  /*
   * Injecting Projects Service
   */
  constructor(private readonly projectsService: ProjectsService) {}

  @Get('/:id?')
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
