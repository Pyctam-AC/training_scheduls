const url = "https://script.google.com/macros/s/AKfycbwz4pDvQUURwdwJVNPa0KOT5iOxpQjCQcv7eKpE87d3-a4WYuMnLLQv9r5AFsdx8LVCqw/exec"

const getResult = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject (`Ошибка: ${res.status}`)
  }
};

export const getScheduls = () => {
  return fetch(`${url}`, {
    method: 'GET',
  })
  .then(res => getResult (res))
}
