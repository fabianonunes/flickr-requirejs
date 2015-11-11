require(['jquery', './flickrApi'], function ($, flickr) {

  flickr
    .photosPublic('49143546@N06')
    .then(function (data) {

      var html = data.items.map(function (item) {
        return '<img src=' + item.media.m + '>'
      }).join('')

      $('body').html(html)

    })

})