import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/providers/projects.service';

@Module({
  imports: [ProjectsModule, AuthModule],
  controllers: [AppController, ProjectsController],
  providers: [AppService, ProjectsService, ProjectsService],
})
export class AppModule {}
