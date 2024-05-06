import { Module } from "@nestjs/common";

import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServeStaticModule } from "@nestjs/serve-static";

import { ExamplesModule } from "./examples/examples.module";
import { ExampleEntity } from "./examples/entities/example.entity";

import { join } from "path";
import { PricesModule } from "./prices/prices.module";
import { PriceEntity } from "./prices/entities/price.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.POSTGRES_URL,
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [ExampleEntity, PriceEntity],
      synchronize: true,
      retryAttempts: 2,
      logging: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, ".."),
    }),
    ExamplesModule,
    PricesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
