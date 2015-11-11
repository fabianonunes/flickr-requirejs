require([
  'jquery', './flickrApi', './extractor', './templater'
], function ($, flickr, extractor, templater) {

  Promise.all([
    flickr.photosPublic('49143546@N06'),
    flickr.photosFriends('49143546@N06')
  ])
  .then(extractor)
  .then(templater)

})
