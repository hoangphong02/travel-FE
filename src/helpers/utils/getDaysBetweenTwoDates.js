export const getDaysBetweenTwoDates = (date1, date2) => {
  // eslint-disable-next-line camelcase
  const Difference_In_Time = date2.getTime() - date1.getTime();

  // eslint-disable-next-line camelcase
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  // eslint-disable-next-line camelcase
  return Difference_In_Days;
};
