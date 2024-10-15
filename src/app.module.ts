import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/providers/projects.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProjectsModule, AuthModule],
  controllers: [AppController, ProjectsController],
  providers: [AppService, ProjectsService, ProjectsService],
})
export class AppModule {}
