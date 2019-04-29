const insNameArr = [
  'upcash', 'ezcash', 'myway', 'ican', 'iwell', 'igoing'
]

function ToNext(router, insname) {
  insNameArr.forEach(name => {
    if (insname.toLowerCase().match(name) !== null) {
      router.push(`/${name}-insureddata`)
    }
  })
}

function BenfToNext(router, insname) {
  insNameArr.forEach(name => {
    if (insname.toLowerCase().match(name) !== null) {
      router.push(`/${name}-4`)
    }
  })
}

export {
  ToNext,
  BenfToNext
}
