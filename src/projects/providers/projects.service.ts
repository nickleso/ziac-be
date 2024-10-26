import { Injectable } from '@nestjs/common';
import { GetProjectsParamDto } from '../dtos/get-projects-param.dto';
import { Repository } from 'typeorm';
import { Projects } from '../projects.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from '../dtos/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Projects)
    private readonly projectsRepository: Repository<Projects>,
  ) {}

  public async findAll(id: GetProjectsParamDto, limit: number, page: number) {
    let projects = await this.projectsRepository.find({
      // relations: {
      //   metaOptions: true,
      // },
    });

    return projects;
  }

  public async create(createProjectsDto: CreateProjectDto) {
    let newProject = this.projectsRepository.create({
      ...createProjectsDto,
    });

    return await this.projectsRepository.save(newProject);
  }

  public async delete(id: number) {
    let project = await this.projectsRepository.findOneBy({ id });

    if (!project) return;

    await this.projectsRepository.delete(id);

    return { deleted: true, id };
  }
}
