// src/domain/repositories/Repository.ts

export interface Repository<T, ID> {
    findById(id: ID): Promise<T | null>;
    findAll(): Promise<T[]>;
    save(entity: T): Promise<T>;
    update(entity: T): Promise<T>;
    delete(id: ID): Promise<void>;
  }