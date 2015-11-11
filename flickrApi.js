define(['q', 'jsonp'], function (q, jsonp) {

  return {

    photosPublic : function (user_id) {
      var url = '//api.flickr.com/services/feeds/photos_public.gne'
      return this._dispatch(url, { format: 'json', id: user_id })
    },

    photosFriends : function (user_id) {
      var url = '//api.flickr.com/services/feeds/photos_friends.gne'
      return this._dispatch(url, { format: 'json', user_id: user_id })
    },

    _dispatch : function (url, data) {
      var dfd = q.defer()
      jsonp({
        url: url,
        data: data,
        callbackName: 'jsoncallback',
        success: dfd.resolve.bind(dfd),
        error: dfd.reject.bind(dfd)
      })
      return dfd.promise
    }

  }
})