import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  // CREATE project
  @Post()
  create(
    @Body()
    body: {
      name: string;
      description: string;
      status?: string;
    },
  ) {
    return this.projectsService.create(body);
  }

  // READ all projects
  @Get()
  findAll() {
    return this.projectsService.findAll();
  }

  // READ one project by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(Number(id));
  }

  // UPDATE project by ID
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    body: {
      name?: string;
      description?: string;
      status?: string;
    },
  ) {
    return this.projectsService.update(Number(id), body);
  }

  // DELETE project by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(Number(id));
  }
}