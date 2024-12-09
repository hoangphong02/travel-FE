export const getLastDayMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();
