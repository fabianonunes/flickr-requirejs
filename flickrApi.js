define(['q', 'jsonp'], function (q, jsonp) {

  var dfd = q.defer(),
      url = '//api.flickr.com/services/feeds/photos_public.gne'

  jsonp({
    url: url,
    data: { format: 'json', id: '49143546@N06' },
    callbackName: 'jsoncallback',
    success: dfd.resolve.bind(dfd),
    error: dfd.reject.bind(dfd)
  })

  return dfd.promise

})