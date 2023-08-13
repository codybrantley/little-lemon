/* Fake API for testing purposes
 ** Generates fake available time slots when selecting various dates to reserve a table
 */

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31
  var a = 185852
  var s = seed % m
  return function () {
    return (s = (s * a) % m) / m
  }
}

const fetchAPI = function (date) {
  let result = []
  let random = seededRandom(date.getDate())

  for (let i = 6; i <= 10; i++) {
    if (random() < 0.5) {
      result.push(i + ':00 PM')
    }
    if (random() < 0.5) {
      result.push(i + ':30 PM')
    }
  }
  return result
}

const submitAPI = function (formData) {
  return true
}

export { fetchAPI, submitAPI }
