define(['jquery'], function ($) {
  return function (items) {
    var html = items.map(function (item) {
      return '<img src=' + item.media.m + '>'
    }).join('')
    $('body').html(html)
  }
})
