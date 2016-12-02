'use strict'
var config = require('../config')

exports.simulate = function (language, eventName, json) {
  var languageURL = ''
  switch(language) {
    case 'java':
      languageURL = config.java.url
      break
    case 'nodejs':
      languageURL = config.node.url
      break
    case 'ruby':
      languageURL = config.ruby.url
      break
    case 'go':
      languageURL = config.go.url
      break
    default:
      languageURL = config.node.url
      break
  }
  return fetch(languageURL + "/api/" + eventName.toLowerCase(), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      json: json
    })
  })
  .then(function (data) {
    return data.json()
  })
  .then(function(data) {
    return data
  })
}
