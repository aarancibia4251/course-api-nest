export interface AdapterMapper<E, R> {
    mapperFromEntityToRO(item: E): R;
    mapperFromListEntityToListRO(list: Array<E>): Array<R>;
}