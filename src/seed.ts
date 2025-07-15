// seed.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { Product } from './product/product-entity/product-entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const dataSource = app.get(DataSource);

  const productRepository = dataSource.getRepository(Product);

  const products: Product[] = [];

  for (let i = 1; i <= 10_000; i++) {
    const product = new Product();
    product.name = `Product ${i}`;
    products.push(product);
  }

  await productRepository.save(products);

  console.log('✅ Seed complete: 10,000 products created.');
  await app.close();
}

bootstrap();
