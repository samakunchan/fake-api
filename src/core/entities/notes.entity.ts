import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'notes' })
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  public createdAt: string;

  @Column({
    type: 'timestamp',
    nullable: true,
    name: 'updated_at',
  })
  public updatedAt?: string;
}

export default User;
