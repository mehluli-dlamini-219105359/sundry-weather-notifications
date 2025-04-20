// WeatherReport.ts
export class WeatherReport {
    location!: string;
    temperature!: number;
    condition!: string;
    humidity?: number;
    windSpeed?: number;
  
    print(): void {
      console.log(
        `${this.location}: ${this.temperature}°C, ${this.condition}` +
        (this.humidity ? `, Humidity: ${this.humidity}%` : '') +
        (this.windSpeed ? `, Wind: ${this.windSpeed} km/h` : '')
      );
    }
  }
  
  // WeatherReportBuilder.ts
  import { WeatherReport } from './WeatherReport';
  
  export class WeatherReportBuilder {
    private report = new WeatherReport();
  
    setLocation(location: string): this {
      this.report.location = location;
      return this;
    }
  
    setTemperature(temp: number): this {
      this.report.temperature = temp;
      return this;
    }
  
    setCondition(condition: string): this {
      this.report.condition = condition;
      return this;
    }
  
    setHumidity(humidity: number): this {
      this.report.humidity = humidity;
      return this;
    }
  
    setWindSpeed(wind: number): this {
      this.report.windSpeed = wind;
      return this;
    }
  
    build(): WeatherReport {
      return this.report;
    }
  }
  