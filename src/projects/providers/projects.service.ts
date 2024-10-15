import { Injectable } from '@nestjs/common';
import { GetProjectsParamDto } from '../dtos/get-projects-param.dto';

@Injectable()
export class ProjectsService {
  public findAll(
    getProjectsParamDto: GetProjectsParamDto,
    limit: number,
    page: number,
  ) {
    const projects = [
      { id: 1, title: 'Project title', description: 'Project description' },
      {
        id: 2,
        title: 'Project title 2',
        description: 'Project description 2',
      },
    ];
    console.log(getProjectsParamDto);
    console.log(getProjectsParamDto.id);
    console.log(getProjectsParamDto.id === undefined);

    if (getProjectsParamDto.id === undefined) return projects;

    return projects.filter(
      (project) => Number(getProjectsParamDto.id) === project.id,
    );
  }
}
