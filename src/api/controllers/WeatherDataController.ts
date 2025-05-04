import { Request, Response } from 'express';

export class WeatherDataController {
  static getLatestWeather(arg0: string, getLatestWeather: any) {
    throw new Error('Method not implemented.');
  }
  static async getRecentWeather(req: Request, res: Response) {
    const weatherService = req.app.locals.weatherService;
    const data = await weatherService.findRecentByLocation(req.params.location);
    res.json(data);
  }
}