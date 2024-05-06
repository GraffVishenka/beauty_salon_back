import { Injectable } from "@nestjs/common";
import { CreateExampleDto } from "./dto/create-example.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ExampleEntity } from "./entities/example.entity";
import { Repository } from "typeorm";
import path from "path";

@Injectable()
export class ExamplesService {
  constructor(
    @InjectRepository(ExampleEntity)
    private repository: Repository<ExampleEntity>
  ) {}

  async create(createExampleDto: CreateExampleDto, file: Express.Multer.File) {
    try {
      const newFile = this.repository.save({
        fileName: file.filename,
        type: createExampleDto.type,
        originalName: file.originalname,
        size: file.size,
        mimetype: file.mimetype,
      });

      return newFile;
    } catch (error) {}
  }

  findAll() {
    const qb = this.repository.createQueryBuilder("examples");

    qb.where('examples.mimetype ILIKE :type', { type: '%image%' })

    return qb.getMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} example`;
  }

  remove(id: number) {
    return `This action removes a #${id} example`;
  }
}
