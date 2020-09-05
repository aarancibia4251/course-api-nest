import {AdapterMapper} from "./AdapterMapper";
import {CourseEntity} from "../../modules/course/course.entity";
import {CourseDto} from "../../modules/course/dto/course.dto";

export class CourseMapper implements AdapterMapper<CourseEntity, CourseDto> {
    mapperFromEntityToRO(item: CourseEntity): CourseDto {
        return {
            Id: item.id,
            Nombre: item.name,
            Precio: item.price,
            FechaRegistro: item.register.toISOString(),
            FechaCreacion: item.created.toISOString(),
            FechaModificacion: item.updated.toISOString()
        } as CourseDto;
    }

    mapperFromListEntityToListRO(list: Array<CourseEntity>): Array<CourseDto> {
        return list.map(this.mapperFromEntityToRO);
    }

}