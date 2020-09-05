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

  @Column({
    name: 'FechaRegistro',
    type: 'timestamp with time zone'
  })
  register: Date;

  @CreateDateColumn({
    name: 'FechaCreacion',
    type: 'timestamp with time zone'
  })
  created: Date;

  @UpdateDateColumn({
    name: 'FechaModificacion',
    type: 'timestamp with time zone'
  })
  updated: Date;

}