import { Module } from '@nestjs/common';
import { ExamplesService } from './examples.service';
import { ExamplesController } from './examples.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './entities/example.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ExampleEntity])],
  controllers: [ExamplesController],
  providers: [ExamplesService],
})
export class ExamplesModule {}
