import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { ExamplesService } from "./examples.service";
import { CreateExampleDto } from "./dto/create-example.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { exampleStorage } from "src/storage";

@Controller("example")
export class ExamplesController {
  constructor(private readonly examplesService: ExamplesService) {}

  @Post()
  @UseInterceptors(FileInterceptor("file", { storage: exampleStorage}))
  create(
    @Body() createExampleDto: CreateExampleDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.examplesService.create(createExampleDto, file);
  }

  @Get()
  findAll() {
    return this.examplesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.examplesService.findOne(+id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.examplesService.remove(+id);
  }
}
