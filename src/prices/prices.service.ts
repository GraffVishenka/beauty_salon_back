import { Injectable } from "@nestjs/common";
import { CreatePriceDto, CreatePriceImgDto } from "./dto/create-price.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PriceEntity } from "./entities/price.entity";

@Injectable()
export class PricesService {
  constructor(
    @InjectRepository(PriceEntity)
    private repository: Repository<PriceEntity>
  ) {}

  create(createPriceDto: CreatePriceDto) {
    return this.repository.save(createPriceDto);
  }

  async findAllByType(name) {
    const prices = await this.repository.findBy({ type: name });
    return prices;
  }

  findOne(id: number) {
    return `This action returns a #${id} price`;
  }

  remove(id: number) {
    return `This action removes a #${id} price`;
  }
}
