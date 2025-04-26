// src/domain/repositories/WeatherDataRepository.ts

import { Repository } from './Repository';
import { WeatherData } from '../models/WeatherData';

export interface WeatherDataRepository extends Repository<WeatherData, string> {
  findRecentByLocation(location: string): Promise<WeatherData[]>;
}