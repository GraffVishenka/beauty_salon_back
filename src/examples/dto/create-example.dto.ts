import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateExampleDto {
  @ApiProperty({ example: "barber", description: "Названия раздела" })
  @IsString({ message: "Должно быть строкой" })
  readonly type: string;
}
