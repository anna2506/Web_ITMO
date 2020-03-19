const ITMO_BORN_YEAR = 1990;
const ITMO_BORN_MONTH = 3;
const ITMO_BORN_DAY = 26;

itmoBornDate = new Date();
itmoBornDate.setFullYear(ITMO_BORN_YEAR);
itmoBornDate.setMonth(ITMO_BORN_MONTH - 1);
itmoBornDate.setDate(ITMO_BORN_DAY);

console.log(itmoBornDate.toDateString()); // Mon Mar 26 1990