import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePriceDto {
  @ApiProperty({ example: "Женская укладка", description: "Названия услуги" })
  @IsString({ message: "Должно быть строкой" })
  name:string;

  @ApiProperty({ example: "+ обработка кончиков волос", description: "Описание услуги" })
  @IsString({ message: "Должно быть строкой" })
  description:string;

  @ApiProperty({ example: "1000", description: "Стоимость" })
  @IsNumber()
  price: number;

  @ApiProperty({ example: "barber", description: "Тип услуги" })
  @IsString({ message: "Должно быть строкой" })
  type: string;
}

export class CreatePriceImgDto{
  @ApiProperty({ example: "barber", description: "Тип услуги" })
  @IsString({ message: "Должно быть строкой" })
  type: string;
}
