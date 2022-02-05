const MILLISECONDS_IN_DAY = 86400000;

/**
 * @public {function}
 * @param {*} value
 * @return {Date}
 */
const newDate = (value) => new Date(value);

/**
 * @public {function}
 * @param {Date} fromDate
 * @param {Date} toDate
 * @return {Number}
 */
const monthDiff = (fromDate, toDate) => {
    const day = (date) => date.getDate();
    const month = (date) => date.getMonth();
    const isFirstDay = () => day(fromDate) == 1;
    const isLastDay = () => {
        const lastDayDate = newDate(toDate);
        lastDayDate.setMonth(month(toDate) + 1, 0);
        return day(lastDayDate) == day(toDate);
    };
    if (!isFirstDay() && !isLastDay()) {
        toDate = newDate(toDate - MILLISECONDS_IN_DAY * (day(fromDate) - 1));
        fromDate.setDate(1);
    }
    const fromMonth = month(fromDate);
    const toMonth = month(toDate);
    let months = fromMonth > toMonth ? 12 - fromMonth + toMonth : toMonth - fromMonth;
    if (isFirstDay() && isLastDay()) {
        months++;
    }
    return months;
};

export {monthDiff, newDate};
