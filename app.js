require(['jquery', './flickrApi'], function ($, flickr) {

  flickr.then(function (data) {

    var html = data.items.map(function (item) {
      return '<img src=' + item.media.m + '>'
    }).join('')

    $('body').html(html)

  })

})
