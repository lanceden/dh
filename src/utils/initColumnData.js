function InitColumnData(oldValue, newValue) {
  if((oldValue === '' || oldValue === null || oldValue === undefined)) {
    oldValue = newValue
  }
  return oldValue
}

export {
  InitColumnData
}
