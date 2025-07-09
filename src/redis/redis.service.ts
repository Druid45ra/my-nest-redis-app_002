import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class RedisService {
  private client: Redis.Redis;

  constructor() {
    this.client = new Redis();
  }

  async set(key: string, value: string) {
    await this.client.set(key, value);
  }

  async get(key: string): Promise<string> {
    return this.client.get(key);
  }
}
