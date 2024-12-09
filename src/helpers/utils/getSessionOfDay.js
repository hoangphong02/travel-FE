export const getSessionOfDay = () => {
  /*
    5 - 11: Morning
    12 - 17: Afternoon
    18 - 4: Evening
    */
  const date = new Date();
  const hh = date.getHours();

  let session = '';

  if (hh >= 5 && hh <= 11) {
    session = 'morning';
  } else if (hh >= 12 && hh <= 17) {
    session = 'afternoon';
  } else {
    session = 'evening';
  }

  return session;
};
