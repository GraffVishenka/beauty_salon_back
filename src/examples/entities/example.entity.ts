import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("examples")
export class ExampleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  fileName:string;

  @Column({ nullable: false })
  originalName: string;

  @Column({ nullable: false })
  size: number;

  @Column({ nullable: false })
  mimetype: string;

  @Column({ nullable: false })
  type: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at: Date;
}
