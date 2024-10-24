import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: true,
  })
  lastName?: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  password: string;

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
}
