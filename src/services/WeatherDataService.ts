import { WeatherDataRepository } from '../repositories/WeatherDataRepository';

export class WeatherDataService {
  constructor(private weatherRepo: WeatherDataRepository) {}

  async getRecentWeather(location: string) {
    return await this.weatherRepo.findRecentByLocation(location);
  }
}