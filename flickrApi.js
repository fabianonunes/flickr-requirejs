define(['jsonp'], function (jsonp) {

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
      return new Promise(function (resolve, reject) {
        jsonp({
          url: url,
          data: data,
          callbackName: 'jsoncallback',
          success: resolve,
          error: reject
        })
      })
    }

  }

})
