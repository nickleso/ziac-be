import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './providers/projects.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projects } from './projects.entity';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
  imports: [UsersModule, TypeOrmModule.forFeature([Projects])],
})
export class ProjectsModule {}
