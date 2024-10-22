import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/providers/projects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import enviromentValidation from './config/environment.validation';

const ENV = process.env.NODE_ENV;
console.log(ENV);

@Module({
  imports: [
    ProjectsModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      load: [appConfig, databaseConfig],
      validationSchema: enviromentValidation,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        host: configService.get<string>('database.host'),
        database: configService.get<string>('database.name'),

        // !!! In production change on `false` !!!
        synchronize: true,
        autoLoadEntities: true,
        // entities: [],
      }),
    }),
  ],
  controllers: [AppController, ProjectsController],
  providers: [AppService, ProjectsService, ProjectsService],
})
export class AppModule {}
