require([
  'jquery', 'q', './flickrApi', './extractor', './templater'
], function ($, q, flickr, extractor, templater) {

  q.all([
    flickr.photosPublic('49143546@N06'),
    flickr.photosFriends('49143546@N06')
  ])
  .then(extractor)
  .then(templater)
  .done()

})
