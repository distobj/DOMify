# DOMify

DOMify republishes information made available through "device APIs" as
local HTML documents accessible via a DOM.

Initially, only the navigator.geolocation API is supported via the
Geo Document object.  Geo location data is stored as a definition list
as the only child of the body element.

The two "demos" are available online here; [current location][1], [watch changing location][2]

Here's the Javascript code behind the former;

```
$(Geo).bind('document-updated',function(e) {
  var lat = $(Geo).find('#latitude').text();
  var lon = $(Geo).find('#longitude').text();
  $('#lat').text(lat); $('#long').text(lon);
});
```

More information about the project is available on the [Wiki][3].

 [1]: http://www.markbaker.ca/2011/DOMify/demo/current-loc.html
 [2]: http://www.markbaker.ca/2011/DOMify/demo/watch-loc.html
 [3]: https://github.com/distobj/DOMify/wiki