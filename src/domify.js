// This will contain common, document-independent code.
//
// As we only support one API at the moment, it's hard to know what
// functionality belongs here, and what it should look like.

DOMIFY = {
  refresh: function(doc) {
    doc.refresh();
  },
  watch: function(doc) {
    return doc.watch();
  },
  unwatch: function(doc,wid) {
    doc.unwatch(wid);
  }
}

// HTML serialization of a Javascript object using definition lists.
// No recursion yet.
// @id is the html:id of the definition list
var HSON = {
  stringify: function(o,id) {
    var out = '<dl id="'+id+'">';
    $.each(o, function(n,v) {
      out+='<dd>'+n+'<dt>'+v;
    });
    out+='</dl>';
  }
}
