import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'text',
    length: 1024,
    nullable: true,
  })
  description?: string;

  @CreateDateColumn({
    type: 'timestamp', // 'timestamp' - PostgreSQL, 'datetime' - MySQL
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp', // 'timestamp' - PostgreSQL, 'datetime' - MySQL
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  //   @Column({
  //     type: 'varchar',
  //     length: 1024,
  //     nullable: true,
  //   })
  //   avatar?: string;
}
