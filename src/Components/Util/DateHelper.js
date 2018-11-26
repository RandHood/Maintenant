const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export function getDayName(date) {
    return days[date.getDay()];
}

export function getMonthName(date) {
    return months[date.getMonth()];
}