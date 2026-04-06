import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  // In-memory storage for users
  private users: {
    id: number;
    name: string;
    email: string;
    role: string;
  }[] = [];

  // Auto-incrementing ID
  private nextId = 1;

  // CREATE a new user
  create(userData: {
    name: string;
    email: string;
    role?: string;
  }) {
    const newUser = {
      id: this.nextId++,
      name: userData.name,
      email: userData.email,
      role: userData.role || 'student',
    };

    this.users.push(newUser);

    return {
      message: 'User created successfully',
      data: newUser,
    };
  }

  // READ all users
  findAll() {
    return {
      message: 'All users fetched successfully',
      count: this.users.length,
      data: this.users,
    };
  }

  // READ one user by ID
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return {
      message: 'User fetched successfully',
      data: user,
    };
  }

  // UPDATE a user by ID
  update(
    id: number,
    updateData: {
      name?: string;
      email?: string;
      role?: string;
    },
  ) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    if (updateData.name !== undefined) {
      user.name = updateData.name;
    }

    if (updateData.email !== undefined) {
      user.email = updateData.email;
    }

    if (updateData.role !== undefined) {
      user.role = updateData.role;
    }

    return {
      message: 'User updated successfully',
      data: user,
    };
  }

  // DELETE a user by ID
  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const deletedUser = this.users[index];
    this.users.splice(index, 1);

    return {
      message: 'User deleted successfully',
      data: deletedUser,
    };
  }
}