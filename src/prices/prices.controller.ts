import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PricesService } from './prices.service';
import { CreatePriceDto, CreatePriceImgDto } from './dto/create-price.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { priceStorage } from 'src/storage';

@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Post()
  create(@Body() createPriceDto: CreatePriceDto) {
    return this.pricesService.create(createPriceDto);
  }

  @Get("/:name")
  findAllByType(@Param("name") name) {
    return this.pricesService.findAllByType(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pricesService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pricesService.remove(+id);
  }
}
