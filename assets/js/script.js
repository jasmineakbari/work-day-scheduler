
// Current Day Function and array
var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
], d, m, y, now, out_string;

now = new Date();
d = now.getDate();
m = now.getMonth();
y = now.getFullYear();

out_string = months[m] + ' ' + d + ' , ' + y;

document.getElementById('currentDay').innerHTML = out_string;