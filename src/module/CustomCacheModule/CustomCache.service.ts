import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache, CachingConfig } from 'cache-manager';

@Injectable()
export class CustomCacheService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheService: Cache,
  ) {}
  async set(
    key: string,
    value: unknown,
    options?: CachingConfig,
  ): Promise<unknown> {
    return this.cacheService.set(key, JSON.stringify(value), options);
  }
  async get(key: string) {
    const cache: string | undefined| null = await this.cacheService.get(key);
    return cache ? JSON.parse(cache) : null;
  }
}
