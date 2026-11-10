function join(...strings) {
  return strings.join("")
}
function OK(...requests) {
  let number = 0;
  const array = [];

  requests.forEach(req => {
    if (req === 0) number++;
  }),
  requests.forEach(req => {
    if (req === 0) array.push("Successful");
  })
  return {
    TimesSuccessfulOccured: number,
    OKs: array
  }
}
