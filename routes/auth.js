
var https = require('https');
var qs = require('querystring');
var Shakes = require('../lib/shakes');

exports.token = function(req, res) {
  var shakesOpts = {
    'client_id': 'Zq7V9Au1lCPlJy0isXpOVy1Si5EM9U3G',
    'client_secret': '4D05oDq4qLmd45UZ536TIvSHh7X9PX6C13Whm11_0uD147N8aRN24FizU5fC2NiR'
  };

  var moves = new Shakes(shakesOpts);
  if(req.query.code) {
    moves.token({'code':req.query.code}, function(t) {
      res.clearCookie('m_token');
      res.clearCookie('m_rtoken');
      res.clearCookie('m_uid');

      res.cookie('m_token', t.access_token, { maxAge: 900000, httpOnly:true });
      res.cookie('m_rtoken', t.refresh_token, { maxAge: 900000, httpOnly:true });
      res.cookie('m_uid', t.user_id, { maxAge: 900000, httpOnly:true });

      res.render('token', {'title': 'Token info','token':JSON.stringify(t)});
    });
  }
};
