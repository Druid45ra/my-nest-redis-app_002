import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class RedisService {
  private client: Redis.Redis;

  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
    });
  }

  async set(key: string, value: string) {
    await this.client.set(key, value);
  }

  async get(key: string): Promise<string> {
    return this.client.get(key);
  }
}

