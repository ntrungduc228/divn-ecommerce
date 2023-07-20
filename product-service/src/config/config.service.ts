import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
config();

interface Config {
  servicePort: string;
}

@Injectable()
export class ConfigService {
  private config = {} as Config;
  constructor() {
    this.config.servicePort = process.env.PORT;
  }

  public get(key: keyof Config): any {
    return this.config[key];
  }
}
