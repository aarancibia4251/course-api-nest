import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('Curso')
export class CourseEntity {

  @PrimaryColumn({
    type: 'uuid',
    name: 'Id',
  })
  id: string;

  @Column('varchar', {
    name: 'Nombre'
  })
  name: string;

  @Column('float', {
    name: 'Precio',
    nullable: true,
  })
  price: number;

  @Column({
    name: 'FechaRegistro',
    type: 'timestamp'
  })
  register: Date;

  @CreateDateColumn({
    name: 'FechaCreacion',
    type: 'timestamp'
  })
  created: Date;

  @UpdateDateColumn({
    name: 'FechaModificacion',
    type: 'timestamp'
  })
  updated: Date;

}
