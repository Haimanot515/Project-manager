# M2 Core Backend – NestJS REST APIs

## Overview

This project is part of my backend learning milestone focused on **NestJS REST API development**.  
It demonstrates the core backend architecture of NestJS, including:

- **Controllers and decorators**
- **Services and providers (Dependency Injection)**
- **Modules**
- **CRUD patterns**
- **Separation of concerns between controller and service layers**

The project currently includes:

- **Projects CRUD endpoints** using **in-memory storage**
- **Business logic handled inside the service layer**
- **UsersModule scaffolded** for future extension

This milestone helped me strengthen my understanding of how a scalable backend is structured using NestJS best practices.

---

## Learning Objectives

The main goals of this project were to:

- Understand the **NestJS modular architecture**
- Learn how **controllers** handle HTTP requests
- Use **decorators** such as `@Controller()`, `@Get()`, `@Post()`, `@Put()`, and `@Delete()`
- Apply **Dependency Injection (DI)** using services/providers
- Implement **CRUD operations**
- Keep **business logic inside services** instead of controllers
- Prepare a clean structure that can later be connected to a real database

---

## Tech Stack

- **Node.js**
- **TypeScript**
- **NestJS**
- **REST API**
- **In-memory data storage** (temporary, for learning/demo purposes)

---

## Project Structure

```bash
src/
├── app.module.ts
├── main.ts
├── app.controller.ts
├── app.controller.spec.ts
├── app.service.ts
├── projects/
│   ├── projects.controller.ts
│   ├── projects.controller.spec.ts
│   ├── projects.service.ts
│   ├── projects.service.spec.ts
│   ├── projects.module.ts
│
├── users/
│   ├── users.controller.ts
│   ├── users.controller.spec.ts
│   ├── users.service.ts
│   ├── users.service.spec.ts
│   ├── users.module.ts
