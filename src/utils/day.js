import dayjs from 'dayjs';

export function getMonth(monthIdx = dayjs().month(), year = dayjs().year()) {
    const firstDayOfTheMonth = dayjs(new Date(year, monthIdx, 1)).day();
    let currentMonthCount = 0 - firstDayOfTheMonth;

    const daysMatrix = new Array(6).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, monthIdx, currentMonthCount));
        });
    });

    return daysMatrix;
}
