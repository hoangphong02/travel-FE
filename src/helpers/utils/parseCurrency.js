export const parseCurrency = (value, currency = 'vi') => {
  if (currency) {
    if (currency === 'vi') {
      return parseInt(value || 0)
        .toLocaleString('it-IT', {
          style: 'currency',
          currency: 'VND',
        })
        .replace('VND', 'vnđ');
    } else {
      return parseInt(value || 0).toLocaleString('it-IT', {
        style: 'currency',
        currency,
      });
    }
  } else {
    return parseInt(value || 0).toLocaleString('it-IT');
  }
};
