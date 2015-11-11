require(['jquery', './flickrApi', 'q'], function ($, flickr, q) {

  q.all([
    flickr.photosPublic('49143546@N06'),
    flickr.photosFriends('49143546@N06')
  ])
    .then(function (data) {
      var _public = data[0], friends = data[1]
      var items = _public.items.concat(friends.items)
      return items.sort(function () {
        return Math.random() > Math.random()
      })
    })
    .then(function (items) {

      var html = items.map(function (item) {
        return '<img src=' + item.media.m + '>'
      }).join('')

      $('body').html(html)

    })
    .done()

})
