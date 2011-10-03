if ( typeof(navigator.geolocation) == 'undefined' ) {
    console.log('No geolocation support');
    return;
}

// create the Geo document
window.Geo = document.implementation.createHTMLDocument('DOMified Geolocation');
var jqGeo = $(Geo);

// Template
jqGeo.find('body').append('<dl><dt>timestamp<dd id="timestamp"><dt>latitude<dd id="latitude"><dt>longitude<dd id="longitude"><dt>accuracy<dd id="accuracy"><dt>altitude<dd id="altitude"><dt>altitude accuracy<dd id="altitudeAccuracy"><dt>heading<dd id="heading"><dt>speed<dd id="speed"></dl>');

// define input parameters ...
jqGeo.find('head').append('<meta name="timeout">');
jqGeo.find('head').append('<meta name="enableHighAccuracy">');
var enableHighAccuracy = jqGeo.find('meta[name=enableHighAccuracy]')
var timeout = jqGeo.find('meta[name=timeout]');

// and set their default values
enableHighAccuracy.attr('content',false);
timeout.attr('content',5);

// switch to monitoring
window.Geo.watch = function() {
  var watchId = navigator.geolocation.watchPosition( window.Geo.updateDom,
    function(){},
    {enableHighAccuracy: enableHighAccuracy.attr('content'),
     timeout: timeout.attr('content')
    }
  );
  return watchId;
}

window.Geo.unwatch = function(wid) {
  navigator.geolocation.clearWatch(wid || watchId);
}

// Update document
window.Geo.updateDom = function(pos) {
  // TODO: Replace with HSON
  jqGeo.find('#timestamp').text(pos.timestamp);
  jqGeo.find('#latitude').text(pos.coords.latitude);
  jqGeo.find('#longitude').text(pos.coords.longitude);
  jqGeo.find('#accuracy').text(pos.coords.accuracy);
  jqGeo.find('#altitude').text(pos.coords.altitude);
  jqGeo.find('#longitude').text(pos.coords.longitude);
  jqGeo.find('#longitude').text(pos.coords.longitude);
  jqGeo.trigger('document-updated'); // mutation
}

window.Geo.refresh = function() {
  navigator.geolocation.getCurrentPosition( window.Geo.updateDom,
    function(){},
    {enableHighAccuracy: enableHighAccuracy.attr('content'),
     timeout: timeout.attr('content')
    }
  );
}

window.Geo.refresh(); // initial population
