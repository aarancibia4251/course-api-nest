import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity('Curso', { schema: 'Administracion' })
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

  @Column('money', {
    name: 'Precio',
    nullable: true,
  })
  price: number;

  @CreateDateColumn({
    name: 'FechaRegistro'
  })
  register: Date;

  @CreateDateColumn({
    name: 'FechaCreacion'
  })
  created: Date;

  @UpdateDateColumn({
    name: 'FechaModificacion',
  })
  updated: Date;

}