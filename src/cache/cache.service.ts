import { CacheModuleOptions, CacheOptionsFactory } from '@nestjs/cache-manager';
import { Injectable } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';

@Injectable()
export class CacheConfigService implements CacheOptionsFactory {
  createCacheOptions(): CacheModuleOptions {
    return {
      store: redisStore as any, 
      ttl: 30,
      socket: {
        host: 'localhost',
        port: 6379,
      },
    };
  }
}
