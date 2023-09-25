const url = "https://script.google.com/macros/s/AKfycbyoY8OPrYkQRYOflYtIgbJTftl3MT83cDjbeKe-RfY2CneV0dTzMsgmnIyhurDNn54QNw/exec"

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
