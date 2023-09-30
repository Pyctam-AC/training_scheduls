export default dateToDay = new Date().toLocaleString('ru',
  {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
  });
