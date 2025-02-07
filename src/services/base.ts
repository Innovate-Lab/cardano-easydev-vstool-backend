import {
  MongooseFindManyOptions,
  MongooseFindOneOptions,
} from "@/repository/type";

interface BaseService<T, K> {
  // CREATE
  create?: (data: T) => Promise<T>;
  createMany?: (data: T[]) => Promise<T[]>;

  // READ
  findMany?: (options?: MongooseFindManyOptions) => Promise<T[]>;
  findById?: (id: K, options?: MongooseFindOneOptions) => Promise<T | null>;
  findOne?: (options?: MongooseFindOneOptions) => Promise<T | null>;

  // UPDATE
  update?: (id: K, data: Partial<T>) => Promise<T | null>;

  // DELETE
  deleteById?: (id: K) => Promise<boolean>;

  // OTHER
}

export { BaseService };
