import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  public findAll() {
    return 'All Ziac projects';
  }
}
