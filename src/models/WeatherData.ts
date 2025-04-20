export class WeatherData {
    private weatherId: string;
    private location: string;
    private temperature: number;
    private condition: string;
    private timestamp: Date;
  
    constructor(id: string, location: string, temp: number, condition: string) {
      this.weatherId = id;
      this.location = location;
      this.temperature = temp;
      this.condition = condition;
      this.timestamp = new Date();
    }
  
    isStale(): boolean {
      const ageInMinutes = (Date.now() - this.timestamp.getTime()) / 60000;
      return ageInMinutes > 30;
    }
  
    fetchFromAPI(): void {
      // Fetch weather from API
    }
  
    cache(): void {
      // Cache logic
    }
  
    invalidateCache(): void {
      // Invalidate cache
    }
  }
  