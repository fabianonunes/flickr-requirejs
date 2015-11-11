define(function () {
  return function (data) {
    var _public = data[0], friends = data[1]
    var items = _public.items.concat(friends.items)
    return items.sort(function () {
      return Math.random() > Math.random()
    })
  }
})
