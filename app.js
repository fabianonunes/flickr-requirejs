require(['jquery', './flickrApi'], function ($, flickr) {

  flickr
    .photosPublic('49143546@N06')
    .then(function (data) {
      return data.items.sort(function () {
        return Math.random() > Math.random()
      })
    })
    .then(function (items) {

      var html = items.map(function (item) {
        return '<img src=' + item.media.m + '>'
      }).join('')

      $('body').html(html)

    })

})
