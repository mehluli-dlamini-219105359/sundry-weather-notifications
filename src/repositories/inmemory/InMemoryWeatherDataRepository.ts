// src/infrastructure/repositories/InMemoryWeatherDataRepository.ts

import { WeatherDataRepository } from '../../repositories/WeatherDataRepository';
import { WeatherData } from '../../models/WeatherData';

export class InMemoryWeatherDataRepository implements WeatherDataRepository {
async update(entity: WeatherData): Promise<WeatherData> {
    if (!this.store.has(entity['weatherId'])) {
        throw new Error(`WeatherData with id ${entity['weatherId']} does not exist.`);
    }
    this.store.set(entity['weatherId'], entity);
    return entity;
}
  private store: Map<string, WeatherData> = new Map();

  async save(entity: WeatherData): Promise<WeatherData> {
    this.store.set(entity['weatherId'], entity); // or entity.getId() if using a getter
    return entity;
  }

  async findById(id: string): Promise<WeatherData | null> {
    return this.store.get(id) || null;
  }

  async delete(id: string): Promise<void> {
    this.store.delete(id);
  }

  async findAll(): Promise<WeatherData[]> {
    return Array.from(this.store.values());
  }

  async findRecentByLocation(location: string): Promise<WeatherData[]> {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000); // last 24 hours

    return Array.from(this.store.values()).filter(data =>
      data['location'] === location && data['timestamp'] >= oneDayAgo
    );
  }
}
