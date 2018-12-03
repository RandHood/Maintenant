const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
const daysSmall = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export function getDayName(date) {
    return days[date.getDay()];
}

export function getDaySmallName(date) {
    return daysSmall[date.getDay()];
}

export function getMonthName(date) {
    return months[date.getMonth()];
}