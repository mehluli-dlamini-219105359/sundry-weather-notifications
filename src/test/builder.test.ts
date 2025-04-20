import { WeatherReportBuilder } from '../src/creational_patterns/builder/WeatherReportBuilder';

test('creates weather report with temperature and humidity', () => {
  const report = new WeatherReportBuilder()
    .setTemperature(25)
    .setHumidity(80)
    .build();

  expect(report.temperature).toBe(25);
  expect(report.humidity).toBe(80);
});

test('throws error when required fields are missing', () => {
  const builder = new WeatherReportBuilder();
  expect(() => builder.build()).toThrow();
});

//Import Issue