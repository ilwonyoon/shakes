
/*
 * GET home page.
 */

//var OAuth = require('OAuth');

var https = require('https');
var qs = require('querystring');
var Shakes = require('../../lib/shakes');

exports.index = function(req, res){
  var t;
  console.log(req.cookies);
  if(req.cookies.m_token) {
    t = req.cookies.m_token;
  }

  var shakesOpts = {
      'client_id': 'Zq7V9Au1lCPlJy0isXpOVy1Si5EM9U3G',
      'client_secret': '4D05oDq4qLmd45UZ536TIvSHh7X9PX6C13Whm11_0uD147N8aRN24FizU5fC2NiR'
  };

  var moves = new Shakes(shakesOpts);
  var auth_url = moves.authorize({'scope':'activity location'});
  res.render('index', { title: 'Express', auth_url: auth_url, token: t });
};