class DateService {
    static timeFormat: string = 'HH:mm';

    static getCurrentDate(): Date {
        return new Date();
    }
}

console.log(DateService.getCurrentDate());
console.log(DateService.timeFormat);