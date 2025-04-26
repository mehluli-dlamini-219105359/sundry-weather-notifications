import { InMemoryWeatherDataRepository } from '../../../src/repositories/inmemory/InMemoryWeatherDataRepository';
import { WeatherData } from '../../../src/models/WeatherData';
//working repo
describe('InMemoryWeatherDataRepository', () => {
  let repository: InMemoryWeatherDataRepository;
  let sampleData: WeatherData;

  beforeEach(() => {
    repository = new InMemoryWeatherDataRepository();
    sampleData = new WeatherData('weather-1', 'New York', 22, 'Sunny');
  });

  it('should save and retrieve weather data by ID', async () => {
    await repository.save(sampleData);
    const found = await repository.findById('weather-1');

    expect(found).not.toBeNull();
    expect(found?.['location']).toBe('New York');
  });

  it('should delete weather data by ID', async () => {
    await repository.save(sampleData);
    await repository.delete('weather-1');

    const found = await repository.findById('weather-1');
    expect(found).toBeNull();
  });

  it('should return all stored weather data', async () => {
    const data2 = new WeatherData('weather-2', 'London', 15, 'Cloudy');

    await repository.save(sampleData);
    await repository.save(data2);

    const all = await repository.findAll();
    expect(all.length).toBe(2);
  });

  it('should find recent weather data by location', async () => {
    const oldData = new WeatherData('weather-3', 'New York', 25, 'Rainy');
    // Simulate old timestamp (manually override for test)
    (oldData as any)['timestamp'] = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000); // 2 days ago

    await repository.save(sampleData); // fresh
    await repository.save(oldData);   // stale

    const results = await repository.findRecentByLocation('New York');
    expect(results.length).toBe(1);
    expect(results[0]['condition']).toBe('Sunny');
  });
});
