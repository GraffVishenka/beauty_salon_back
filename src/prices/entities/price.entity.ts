import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("prices")
export class PriceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name:string;

  @Column({ nullable: false })
  description:string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  type: string;
}
