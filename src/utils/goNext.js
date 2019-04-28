const insNameArr = [
  'upcash', 'ezcash', 'myway', 'ican', 'iwell'
]

function ToNext(router, insname) {
  insNameArr.forEach(name => {
    if (insname.toLowerCase().match(name) !== null) {
      router.push(`/${name}-insureddata`)
    }
  })
}

export {
  ToNext
}
