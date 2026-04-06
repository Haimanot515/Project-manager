import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  // In-memory storage for projects
  private projects: {
    id: number;
    name: string;
    description: string;
    status: string;
  }[] = [];

  // Auto-incrementing ID
  private nextId = 1;

  // CREATE a new project
  create(projectData: {
    name: string;
    description: string;
    status?: string;
  }) {
    const newProject = {
      id: this.nextId++,
      name: projectData.name,
      description: projectData.description,
      status: projectData.status || 'pending',
    };

    this.projects.push(newProject);

    return {
      message: 'Project created successfully',
      data: newProject,
    };
  }

  // READ all projects
  findAll() {
    return {
      message: 'All projects fetched successfully',
      count: this.projects.length,
      data: this.projects,
    };
  }

  // READ one project by ID
  findOne(id: number) {
    const project = this.projects.find((project) => project.id === id);

    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    return {
      message: 'Project fetched successfully',
      data: project,
    };
  }

  // UPDATE a project by ID
  update(
    id: number,
    updateData: {
      name?: string;
      description?: string;
      status?: string;
    },
  ) {
    const project = this.projects.find((project) => project.id === id);

    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    if (updateData.name !== undefined) {
      project.name = updateData.name;
    }

    if (updateData.description !== undefined) {
      project.description = updateData.description;
    }

    if (updateData.status !== undefined) {
      project.status = updateData.status;
    }

    return {
      message: 'Project updated successfully',
      data: project,
    };
  }

  // DELETE a project by ID
  remove(id: number) {
    const index = this.projects.findIndex((project) => project.id === id);

    if (index === -1) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    const deletedProject = this.projects[index];
    this.projects.splice(index, 1);

    return {
      message: 'Project deleted successfully',
      data: deletedProject,
    };
  }
}