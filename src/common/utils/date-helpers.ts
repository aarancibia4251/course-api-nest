import * as moment from 'moment';

export class DateHelpers {
    public static dateToStringFormat(date: Date, format: string): string {
        return moment(date).format(format).toString();
    }
}